import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AuthError } from '@supabase/supabase-js';
import { TEmail } from '@src/types/auth';
export const useSignInWithEmailAndPassword = () => {
  const supabase = useSupabaseClient();
  const [_error, setError] = useState<AuthError>();
  const [_loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const signInWithEmailAndPassword = async (email: TEmail, password: string) => {
    setLoading(true);
    setError(undefined);
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      router.push(searchParams.get('redirectUrl') || '/');
    } else {
      console.log(error);
      setError(error);
      if (error.message === 'Invalid login credentials') {
        alert('Wrong credentials - maybe reset password');
      }
    }
    setLoading(false);
  };

  return { signInWithEmailAndPassword, _loading, _error };
};
