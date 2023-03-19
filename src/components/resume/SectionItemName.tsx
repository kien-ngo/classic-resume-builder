import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemName({ defaultValue, htmlFor }: { defaultValue: string; htmlFor: string }) {
  const [value, setValue] = useState<string>(defaultValue);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} font-bold`}>
        {value}
      </label>
      <TextInputEditor defaultValue={value} htmlFor={htmlFor} saveFn={setValue} />
    </>
  );
}
