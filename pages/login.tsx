import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const isLoggedIn = Boolean(session && session.user.id);
  const props = { isLoggedIn } as TLogInPageProps;
  return {
    props: props,
  };
};

type TLogInPageProps = {
  isLoggedIn: boolean;
};

export default function LoginPage({ isLoggedIn }: TLogInPageProps) {
  if (isLoggedIn) return <div>You are logged in already</div>;
  return (
    <div>
   
    </div>
  );
}
