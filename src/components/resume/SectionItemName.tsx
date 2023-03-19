import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemName({ sectionName, index }: { sectionName: string; index: number }) {
  const htmlFor: string = `sectionItemName_${index}`;
  const [scName, setSectionName] = useState<string>(sectionName);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} font-bold`}>{scName}</label>
      <TextInputEditor defaultValue={scName} htmlFor={htmlFor} saveFn={setSectionName} />
    </>
  );
}
