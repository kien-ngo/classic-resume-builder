import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemLocation({ defaultValue, htmlFor }: { defaultValue: string; htmlFor: string }) {
  const [value, setValue] = useState<string>(defaultValue);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight}`}>
        {value ? value : '[Add location]'}
      </label>
      <TextInputEditor defaultValue={value} htmlFor={htmlFor} saveFn={setValue} title="Edit role" />
    </>
  );
}
