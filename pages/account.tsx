import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext, NextPage } from 'next';

type TAccountPageProps = {
  isLoggedIn: boolean;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return { props: { isLoggedIn: false } as TAccountPageProps };
  }

  // Only fetch NFTs if user has logged in
};
const AccountPage: NextPage = () => {
  return <div className="flex flex-col"></div>;
};

export default AccountPage;
