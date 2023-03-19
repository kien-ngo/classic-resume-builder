import { DEFAULT_PROFILE } from '@src/constants/defaultProfile';
import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function Name() {
  const [name, setName] = useState<string>(DEFAULT_PROFILE.name);
  return (
    <>
      <label className={`w-fit mx-auto text-center mt-0 text-32pt ${classHoverHighlight}`} htmlFor="NameEdit">
        {name}
      </label>
      <TextInputEditor htmlFor="NameEdit" defaultValue={name} saveFn={setName} title="Update name" />
    </>
  );
}
