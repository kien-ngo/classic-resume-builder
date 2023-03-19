import { TEmail } from '@src/types/auth';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AuthError } from '@supabase/supabase-js';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const useCreateUserWithEmailAndPassword = () => {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailSignUpError = error?.message ?? '';

  const createUserWithEmailAndPassword = async (
    email: TEmail,
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    const displayName: string = `${firstName} ${lastName}`;
    setLoading(true);
    setError(undefined);
    const res = await fetch('api/auth/checkExistUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
    const { exist } = await res.json();

    if (exist) {
      alert('Error Email is already used');
      setError(new AuthError('Email is already used. Please sign in'));
      setLoading(false);
      return;
    }
    // const refCode = searchParams.get('refCode') as string;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          displayName: displayName,
          // referredBy: refCode ?? null,
        },
      },
    });
    if (!error) {
      router.push(`/signup/email-registered/?email=${email}`);
    } else {
      setError(error);
    }
    setLoading(false);
  };

  return { createUserWithEmailAndPassword, emailSignUpError, loading };
};
