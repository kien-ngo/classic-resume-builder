import { classHoverHighlight } from '@src/constants/tailwind';
import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import { useState } from 'react';
import TextareaEditor from '../modals/TextareaEditor';

export default function SectionItemHighlight({
  index,
  subIndex,
  subsubIndex,
}: {
  index: number;
  subIndex: number;
  subsubIndex: number;
}) {
  const [sections, setSections] = useAtom(sectionsAtom);
  const item = sections[index].items[subIndex];
  const highlightItem = item.highlights[subsubIndex];
  const htmlFor = `sectionHighlight_${item.name}_${subIndex}_${subsubIndex}`;
  const updateSectionHighlight = (newValue: string) => {
    sections[index].items[subIndex].highlights[subsubIndex] = newValue;
    setSections([...sections]);
  };
  return (
    <>
      <label htmlFor={htmlFor}>
        <div className={`${classHoverHighlight}`}>{highlightItem}</div>
      </label>
      <TextareaEditor
        defaultValue={highlightItem}
        htmlFor={htmlFor}
        saveFn={updateSectionHighlight}
        textareaCols={30}
        textareaRows={10}
        isOptional={true}
      />
    </>
  );
}
