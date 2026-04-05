/**
 * API utilities for production-safe requests
 */

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiCall<T = unknown>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      // Add timeout
      signal: AbortSignal.timeout(10000),
    });

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    let data;

    if (contentType?.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      throw new ApiError(
        response.status,
        data?.message || `HTTP ${response.status}`,
        data
      );
    }

    return {
      success: true,
      data: data,
      statusCode: response.status,
    };
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
        statusCode: 0,
      };
    }

    if (error instanceof ApiError) {
      return {
        success: false,
        error: error.message,
        statusCode: error.statusCode,
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred.',
      statusCode: 500,
    };
  }
}

export async function apiGet<T = unknown>(url: string): Promise<ApiResponse<T>> {
  return apiCall<T>(url, { method: 'GET' });
}

export async function apiPost<T = unknown>(
  url: string,
  body: unknown
): Promise<ApiResponse<T>> {
  return apiCall<T>(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function apiPut<T = unknown>(
  url: string,
  body: unknown
): Promise<ApiResponse<T>> {
  return apiCall<T>(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

export async function apiDelete<T = unknown>(url: string): Promise<ApiResponse<T>> {
  return apiCall<T>(url, { method: 'DELETE' });
}
