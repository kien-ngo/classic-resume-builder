import {
  contactAddressAtom,
  emailAtom,
  extraLinksAtom,
  introAtom,
  nameAtom,
  phoneNumberAtom,
  sectionsAtom,
} from '@src/store/jotai';
import { TResumeProfile } from '@src/types/resume';
import { closePopup } from '@src/utils/closePopup';
import { useAtom } from 'jotai';

export default function UploadResumeModal() {
  const [, setAddress] = useAtom(contactAddressAtom);
  const [, setName] = useAtom(nameAtom);
  const [, setPhone] = useAtom(phoneNumberAtom);
  const [, setEmail] = useAtom(emailAtom);
  const [, setIntro] = useAtom(introAtom);
  const [, setExternalLinks] = useAtom(extraLinksAtom);
  const [, setSections] = useAtom(sectionsAtom);

  const handleFileUpload = (event: React.ChangeEvent) => {
    try {
      const input = event.target as HTMLInputElement;
      if (!input || !input.files || input.files.length !== 1) return;
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const jsonContent = event.target?.result as string;
        try {
          const jsonObject: TResumeProfile = JSON.parse(jsonContent);
          console.log(jsonObject);
          // Start validating the json content
          if (!validateJsonContent(jsonObject)) return alert('Invalid json content');
          const { name, intro, sections, extraLinks, contact } = jsonObject;
          setName(name);
          setAddress(contact.address);
          setPhone(contact.phone);
          setEmail(contact.email);
          setIntro(intro);
          setSections(sections);
          setExternalLinks(extraLinks);
          closePopup('UploadResume');
        } catch (error) {
          console.error(error);
          // Handle JSON parsing error
        }
      };
      reader.readAsText(file);
    } catch (err) {
      alert(err);
    }
  };
  const validateJsonContent = (jsonContent: any): Boolean => {
    try {

    }
    catch (err) {
      return false;
    }
    return true;
  };
  return (
    <>
      <input type="checkbox" id="UploadResume" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full lg:w-[700px] md:w-[500px] flex flex-col">
          <div className="w-full top-0 right-0 flex flex-row justify-between">
            <span></span>
            <span className="my-auto pl-8 text-white">Upload resume (*.json)</span>
            <label htmlFor="UploadResume" className="btn btn-sm btn-circle my-auto">
              ✕
            </label>
          </div>
          <div className="flex flex-col mt-8">
            <input
              accept=".json"
              onChange={(e) => handleFileUpload(e)}
              type="file"
              className="file-input w-full max-w-xs mx-auto file-input-bordered"
            />
            <div className="flex flex-row flex-wrap justify-between w-[180px] mx-auto mt-5">
              <label htmlFor="UploadResume" className="btn btn-success" onClick={() => {}}>
                Save
              </label>
              <label htmlFor="UploadResume" className="btn btn-error">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
