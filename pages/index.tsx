import type { NextPage } from 'next';
import Name from '@src/components/resume/Name';
import Address from '@src/components/resume/Address';
import PhoneNumber from '@src/components/resume/PhoneNumber';
import Email from '@src/components/resume/Email';
import Intro from '@src/components/resume/Intro';
import ExternalLinksContainer from '@src/components/resume/ExternalLinksContainer';
import SectionContainer from '@src/components/resume/SectionContainer';
import Link from 'next/link';
import UploadResumeBtn from '@src/components/resume/UploadResumeBtn';

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col pt-7">
      <div className="h-10 bg-indigo-700 flex flex-row justify-end px-6 fixed top-0 w-full z-10">
        {/* <button className="hover:border hover:border-white px-2 py-1 border border-transparent duration-150 h-fit my-auto rounded-lg ml-4">
          Download
        </button> */}
        <UploadResumeBtn />
        <Link
          href="/backup"
          className="hover:border hover:border-white px-2 py-1 border border-transparent duration-150 h-fit my-auto rounded-lg ml-4"
        >
          Backup
        </Link>
        {/* <button className="hover:border hover:border-white px-2 py-1 border border-transparent duration-150 h-fit my-auto rounded-lg ml-4">
          Preview
        </button>
        <button className="hover:border hover:border-white px-2 py-1 border border-transparent duration-150 h-fit my-auto rounded-lg ml-4">
          Print
        </button> */}
      </div>
      <div className="overflow-y-auto mx-auto flex mt-5">
        {/* This is the A4 Paper content */}
        <div className="w-[210mm] min-h-[297mm] py-[2cm] px-[1cm] m-auto bg-slate-100 text-black flex flex-col relative">
          <span className="absolute top-0 left-0 text-center w-full text-blue-700">
            [This is not the final design of your resume. It&apos;s here 4u to fill up the info]
          </span>
          <Name />
          <div className="text-center flex flex-col text-11pt">
            <div className="flex flex-col">
              <Address />
              <PhoneNumber />
              <Email />
              <ExternalLinksContainer />
            </div>
            <Intro />
            <SectionContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
