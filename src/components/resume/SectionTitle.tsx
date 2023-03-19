import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionTitle({ sectionTitle, index }: { sectionTitle: string; index: number }) {
  const htmlFor: string = `sectionTitle_${index}`;
  const [scTitle, setScTitle] = useState<string>(sectionTitle);

  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} mb-[4px] uppercase text-left text-16pt w-fit`}>
        {scTitle}
      </label>
      <TextInputEditor htmlFor={htmlFor} defaultValue={scTitle} saveFn={setScTitle} />
    </>
  );
}
