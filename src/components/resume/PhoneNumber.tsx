import { DEFAULT_PROFILE } from '@src/constants/defaultProfile';
import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function PhoneNumber() {
  const [phone, setPhone] = useState<string>(DEFAULT_PROFILE.contact.phone);
  return (
    <>
      <label className={`w-fit mx-auto ${classHoverHighlight}`} htmlFor="PhoneNumberEdit">
        {phone}
      </label>
      <TextInputEditor htmlFor="PhoneNumberEdit" defaultValue={phone} saveFn={setPhone} title="Update phone number" />
    </>
  );
}
