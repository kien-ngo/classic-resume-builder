import UploadResume from '../modals/UploadResume';

export default function UploadResumeBtn() {
  return (
    <>
      <label
        htmlFor="UploadResume"
        className="cursor-pointer hover:border hover:border-white px-2 py-1 border border-transparent duration-150 h-fit my-auto rounded-lg ml-4"
      >
        Upload resume
      </label>
      <UploadResume />
    </>
  );
}
