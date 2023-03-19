// import Link from 'next/dist/client/link';
// import dynamic from 'next/dist/shared/lib/dynamic';
// import { FiSearch } from 'react-icons/fi';
// import { useUserContext } from '@src/stores/AuthContext';
// import { CgProfile } from 'react-icons/cg';

// const UserDropDown = dynamic(() => import('./UserDropDown'), { ssr: false });

type TNavbarProps = {
  web3?: boolean;
};
export default function Navbar({ web3 }: TNavbarProps) {
  return <></>
  // const { user } = useUserContext();
  // return (
  //   <div className="flex flex-row justify-between h-[80px] w-full px-6 bg-transparent">
  //     <Link href="/" className="my-auto">
  //       <img src="/logo.svg" alt="" width={40} />
  //     </Link>
  //     <div className="flex flex-row justify-between ml-14">
  //       {user ? (
  //         <div className="dropdown dropdown-end ml-14 h-fit my-auto">
  //           <label tabIndex={0} className="m-1 cursor-pointer">
  //             <CgProfile size={32} />
  //           </label>
  //           <UserDropDown />
  //         </div>
  //       ) : (
  //         <>
  //           <Link
  //             href="/login"
  //             className="my-auto border-2 border-white rounded-full py-2 px-4 text-xl hover:bg-white hover:text-black duration-150 ml-4"
  //           >
  //             Login
  //           </Link>
  //           <Link
  //             href="/signup"
  //             className="my-auto border-2 rounded-full py-2 px-4 text-xl ml-4 brightness-90 hover:brightness-100 duration-150 hover:border-white"
  //           >
  //             Sign up
  //           </Link>
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );
}
