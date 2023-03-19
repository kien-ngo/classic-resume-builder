import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useEffect, useState } from 'react';
import { PostgrestError, Session, User } from '@supabase/supabase-js';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { TUserInfoProps } from '@src/types/auth';

type TAuthContextProps = {
  user: User | null;
  session: Session | null;
  userInfo: TUserInfoProps | null;
  authLoading: boolean;
  authError: PostgrestError | null;
  getUserInfo: Function;
  setUserInfo: Dispatch<SetStateAction<TUserInfoProps | null>>;
  updateUserInfo: Function;
};
export const AuthContext = createContext<TAuthContextProps>({
  user: null,
  session: null,
  userInfo: null,
  authError: null,
  authLoading: false,
  getUserInfo: async () => {},
  setUserInfo: () => {},
  updateUserInfo: async () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const [session, setUserSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const supabase = useSupabaseClient();
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<PostgrestError | null>(null);
  const [userInfo, setUserInfo] = useState<TUserInfoProps | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription;
    };
  }, []);

  const getUserInfo = async () => {
    if (!user || !user.id) return;
    setAuthLoading(true);
    const { data, error } = await supabase.from('users').select('*').eq('uuid', user.id).limit(1).single();
    setUserInfo(data as TUserInfoProps);
    if (error) setAuthError(error as PostgrestError);
    setAuthLoading(false);
  };

  // Update user info in the background
  const updateUserInfo = async (newData: Partial<TUserInfoProps>): Promise<void> => {
    const { error } = await supabase.from('users').update(newData).eq('uuid', user?.id);
  };

  const value = {
    session,
    user,
    userInfo,
    authLoading,
    authError,
    getUserInfo,
    setUserInfo,
    updateUserInfo,
  };

  useEffect(() => {
    if (!user) return;
    getUserInfo();
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a AuthContextProvider.');
  }
  return context;
};
