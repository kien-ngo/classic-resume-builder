import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemTitle({ defaultValue, index }: { defaultValue: string; index: number }) {
  const htmlFor: string = `sectionItemTitle_${index}`;
  const [value, setValue] = useState<string>(defaultValue);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} text-16pt`}>
        {value}
      </label>
      <TextInputEditor defaultValue={value} htmlFor={htmlFor} saveFn={setValue} />
    </>
  );
}
