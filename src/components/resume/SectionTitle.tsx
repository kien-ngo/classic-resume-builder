import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionTitle({ defaultValue, index }: { defaultValue: string; index: number }) {
  const htmlFor: string = `sectionTitle_${index}`;
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} mb-[4px] mt-5 uppercase text-left text-3xl w-fit`}>
        {value}
      </label>
      <TextInputEditor htmlFor={htmlFor} defaultValue={value} saveFn={setValue} />
    </>
  );
}
