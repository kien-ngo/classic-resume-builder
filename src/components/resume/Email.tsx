import { DEFAULT_PROFILE } from '@src/constants/defaultProfile';
import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function Email() {
  const [email, setEmail] = useState<string>(DEFAULT_PROFILE.contact.email);
  return (
    <>
      <label className={`w-fit mx-auto ${classHoverHighlight}`} htmlFor="EmailEdit">
        {email}
      </label>
      <TextInputEditor htmlFor="EmailEdit" defaultValue={email} saveFn={setEmail} title="Update email" />
    </>
  );
}
