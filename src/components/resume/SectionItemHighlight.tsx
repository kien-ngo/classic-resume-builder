import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextareaEditor from '../modals/TextareaEditor';

export default function SectionItemHighlight({ defaultValue, htmlFor }: { defaultValue: string; htmlFor: string }) {
  const [value, setValue] = useState<string>(defaultValue);
  return (
    <>
      <label htmlFor={htmlFor}>
        <div className={`${classHoverHighlight}`}>{value ?? '[Add some highlights]'}</div>
      </label>
      <TextareaEditor defaultValue={value} htmlFor={htmlFor} saveFn={setValue} textareaCols={30} textareaRows={10} />
    </>
  );
}
