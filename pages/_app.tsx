import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import Head from 'next/head';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress
import { useRouter } from 'next/router';
import { AuthContextProvider } from '@src/stores/AuthContext';
import Navbar from '@src/components/shared/Navbar';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  // const router = useRouter();

  // useEffect(() => {
  //   router.events.on('routeChangeStart', () => NProgress.start());
  //   router.events.on('routeChangeComplete', () => {
  //     NProgress.done();
  //   });
  //   router.events.on('routeChangeError', () => NProgress.done());
  // }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Head>
      <div className="flex flex-col">
        {/* <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
          <AuthContextProvider> */}
            <>
              <Navbar />
              <Component {...pageProps} />
            </>
          {/* </AuthContextProvider>
        </SessionContextProvider> */}
      </div>
    </>
  );
}

export default MyApp;
