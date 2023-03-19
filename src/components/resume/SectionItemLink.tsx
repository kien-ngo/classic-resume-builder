import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemLink({ defaultValue, htmlFor }: { defaultValue: string; htmlFor: string }) {
  const [value, setValue] = useState<string>(defaultValue);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} text-blue-600 w-fit text-10pt font-bold`}>
        {value ? value : '[Add a link]'}
      </label>
      <TextInputEditor defaultValue={value} htmlFor={htmlFor} saveFn={setValue} isOptional={true} />
    </>
  );
}
