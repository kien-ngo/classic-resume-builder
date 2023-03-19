import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemTitle({ sectionItemTitle, index }: { sectionItemTitle: string; index: number }) {
  const htmlFor: string = `sectionItemTitle_${index}`;
  const [scItemTitle, setSectionItemTitle] = useState<string>(sectionItemTitle);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} text-16pt`}>
        {scItemTitle}
      </label>
      <TextInputEditor defaultValue={scItemTitle} htmlFor={htmlFor} saveFn={setSectionItemTitle} />
    </>
  );
}
