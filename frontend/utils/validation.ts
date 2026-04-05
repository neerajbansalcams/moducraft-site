/**
 * Form validation utilities
 */

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

export const validateMessage = (message: string): boolean => {
  return message.trim().length >= 10 && message.trim().length <= 5000;
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 1000);
};

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const validateContactForm = (data: ContactFormData): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!validateName(data.name)) {
    errors.name = 'Name must be between 2 and 100 characters';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!validateMessage(data.message)) {
    errors.message = 'Message must be between 10 and 5000 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
