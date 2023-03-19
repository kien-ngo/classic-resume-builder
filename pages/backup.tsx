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
import { useAtom } from 'jotai';

export default function BackupPage() {
  const [name] = useAtom(nameAtom);
  const [intro] = useAtom(introAtom);
  const [email] = useAtom(emailAtom);
  const [phone] = useAtom(phoneNumberAtom);
  const [address] = useAtom(contactAddressAtom);
  const [extraLinks] = useAtom(extraLinksAtom);
  const [sections] = useAtom(sectionsAtom);

  const downloadJsonBackup = () => {
    const profileData: TResumeProfile = {
      name,
      intro,
      contact: { email, address, phone },
      extraLinks,
      sections,
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profileData));
    const dlAnchorElem = document.getElementById('downloadResumeBackupData') as HTMLAnchorElement;
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', 'resume_backup.json');
    dlAnchorElem.click();
  };
  return (
    <div>
      <button
        onClick={downloadJsonBackup}
        className="hover:border hover:border-white px-2 py-1 border border-transparent duration-150 h-fit my-auto rounded-lg ml-4"
      >
        Backup
      </button>
    </div>
  );
}
