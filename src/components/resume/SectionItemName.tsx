import { classHoverHighlight } from '@src/constants/tailwind';
import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemName({ index, subIndex }: { index: number; subIndex: number }) {
  const [sections, setSections] = useAtom(sectionsAtom);
  const item = sections[index].items[subIndex];
  const htmlFor: string = `sectionName_${item.name}_${index}`;
  const updateSectionName = (newName: string) => {
    sections[index].items[subIndex].name = newName;
    setSections([...sections]);
  };
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} font-bold ${!item.name ? 'text-orange-600' : ''}`}>
        {item.name ? item.name : '[+ Add a name]'}
      </label>
      <TextInputEditor defaultValue={item.name} htmlFor={htmlFor} saveFn={updateSectionName} />
    </>
  );
}
