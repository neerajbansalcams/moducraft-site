'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error tracking service (e.g., Sentry, LogRocket)
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-parchment">
          <div className="text-center px-4">
            <h1 className="font-playfair text-4xl font-bold text-slate mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              We&apos;re sorry for the inconvenience. Our team has been notified and we&apos;re working on a fix.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
