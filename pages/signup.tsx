import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const isLoggedIn = Boolean(session && session.user.id);
  const props = { isLoggedIn } as TSignUpPageProps;
  return {
    props: props,
  };
};

type TSignUpPageProps = {
  isLoggedIn: boolean;
};

export default function SignUpPage({ isLoggedIn }: TSignUpPageProps) {
  if (isLoggedIn) return <div>You are logged in already</div>;
  return (
    <div>
  
    </div>
  );
}
