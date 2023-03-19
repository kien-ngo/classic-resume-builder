import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemRole({ sectionItemRole, index }: { sectionItemRole: string; index: number }) {
  const htmlFor: string = `sectionItemTitle_${index}`;
  const [scItemRole, setSectionItemRole] = useState<string>(sectionItemRole);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight}`}>
        {scItemRole}
      </label>
      <TextInputEditor defaultValue={scItemRole} htmlFor={htmlFor} saveFn={setSectionItemRole} title='Edit role' />
    </>
  );
}
