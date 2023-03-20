import { classHoverHighlight } from '@src/constants/tailwind';
import { phoneNumberAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextInputEditor from '../modals/TextInputEditor';

export default function PhoneNumber() {
  const [phone, setPhone] = useAtom(phoneNumberAtom);
  return (
    <>
      <label
        className={`w-fit mx-auto ${classHoverHighlight} ${!phone ? 'text-orange-600 font-bold' : ''}`}
        htmlFor="PhoneNumberEdit"
      >
        {phone ? phone : '[+ Add phone number]'}
      </label>
      <TextInputEditor
        htmlFor="PhoneNumberEdit"
        defaultValue={phone}
        saveFn={setPhone}
        title="Update phone number"
        isOptional={true}
      />
    </>
  );
}
