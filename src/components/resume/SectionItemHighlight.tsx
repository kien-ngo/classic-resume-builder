import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextareaEditor from '../modals/TextareaEditor';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemHighlight({ defaultValue, index }: { defaultValue: string; index: number }) {
  const htmlFor: string = `sectionItemHighlight_${index}`;
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
