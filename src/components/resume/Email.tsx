import { classHoverHighlight } from '@src/constants/tailwind';
import { emailAtom } from '@src/store/jotai';
import { useAtom } from 'jotai/react';
import TextInputEditor from '../modals/TextInputEditor';

export default function Email() {
  const [email, setEmail] = useAtom(emailAtom);
  return (
    <>
      <label className={`w-fit mx-auto ${classHoverHighlight}`} htmlFor="EmailEdit">
        {email}
      </label>
      <TextInputEditor htmlFor="EmailEdit" defaultValue={email} saveFn={setEmail} title="Update email" />
    </>
  );
}
