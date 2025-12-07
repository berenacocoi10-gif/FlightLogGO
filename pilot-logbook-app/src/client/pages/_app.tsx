import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import { SyncProvider } from '../context/SyncContext';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Any global setup can be done here
  }, []);

  return (
    <SyncProvider>
      <Component {...pageProps} />
    </SyncProvider>
  );
}

export default MyApp;