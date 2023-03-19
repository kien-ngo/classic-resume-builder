import { classHoverHighlight } from '@src/constants/tailwind';
import { phoneNumberAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextInputEditor from '../modals/TextInputEditor';

export default function PhoneNumber() {
  const [phone, setPhone] = useAtom(phoneNumberAtom);
  return (
    <>
      <label className={`w-fit mx-auto ${classHoverHighlight}`} htmlFor="PhoneNumberEdit">
        {phone}
      </label>
      <TextInputEditor htmlFor="PhoneNumberEdit" defaultValue={phone} saveFn={setPhone} title="Update phone number" />
    </>
  );
}
