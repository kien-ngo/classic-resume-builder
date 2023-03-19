import type { NextPage } from 'next';
import { DEFAULT_PROFILE } from '@src/constants/defaultProfile';
import Name from '@src/components/resume/Name';
import Address from '@src/components/resume/Address';
import PhoneNumber from '@src/components/resume/PhoneNumber';
import Email from '@src/components/resume/Email';
import Intro from '@src/components/resume/Intro';
import ExternalLink from '@src/components/resume/ExternalLink';
import Section from '@src/components/resume/Section';

const HomePage: NextPage = () => {
  const downloadJsonBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(DEFAULT_PROFILE));
    const dlAnchorElem = document.getElementById('downloadResumeBackupData') as HTMLAnchorElement;
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', 'resume_backup.json');
    dlAnchorElem.click();
  };
  return (
    <div className="flex flex-col pt-7">
      <div className="h-10 bg-indigo-700 flex flex-row justify-end px-6 fixed top-0 w-full z-10">
        {/* <button className="hover:border hover:border-white px-2 py-1 border border-transparent duration-150 h-fit my-auto rounded-lg ml-4">
          Download
        </button> */}
        <button
          onClick={downloadJsonBackup}
          className="hover:border hover:border-white px-2 py-1 border border-transparent duration-150 h-fit my-auto rounded-lg ml-4"
        >
          Backup
        </button>
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
          <span className="text-red-500 absolute top-0 left-0">
            [This is not the final design of your resume. It&apos;s just here 4u to fill up the info]
          </span>
          <Name />
          <div className="text-center flex flex-col text-11pt">
            <div className="flex flex-col">
              <Address />
              <PhoneNumber />
              <Email />
              <div className="mb-3">
                {DEFAULT_PROFILE.extraLinks.map((item, index) => (
                  <>
                    <ExternalLink item={item} index={index} key={item.link} />
                    {index !== DEFAULT_PROFILE.extraLinks.length - 1 ? <span>|</span> : <></>}
                  </>
                ))}
              </div>
            </div>
            <Intro />
            {DEFAULT_PROFILE.sections.map((item, index) => (
              <Section item={item} mainIndex={index} key={item.displayText} />
            ))}
          </div>
        </div>
      </div>
      <a href="" id="downloadResumeBackupData" className="hidden"></a>
    </div>
  );
};

export default HomePage;
