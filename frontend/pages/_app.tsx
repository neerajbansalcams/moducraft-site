import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Disable console logs in production
    if (process.env.NODE_ENV === 'production') {
      console.log = () => {};
      console.warn = () => {};
    }
  }, []);

  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
