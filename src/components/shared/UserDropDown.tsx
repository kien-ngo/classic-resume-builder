import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';

export default function UserDropDown() {
  const supabase = useSupabaseClient();
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error);
  };
  return (
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-auto">
      <li>
        <Link href="/account">View account</Link>
      </li>
      <li>
        <Link href="/account/settings">Update account</Link>
      </li>
      <li>
        <button className="text-red-500" onClick={logout}>
          Sign out
        </button>
      </li>
    </ul>
  );
}
