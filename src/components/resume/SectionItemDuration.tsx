import { classHoverHighlight } from '@src/constants/tailwind';
import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemDuration({ index, subIndex }: { index: number; subIndex: number }) {
  const [sections, setSections] = useAtom(sectionsAtom);
  const item = sections[index].items[subIndex];
  const htmlFor = `sectionDuration_${item.name}_${index}`;
  const updateSectionDuration = (newVal: string) => {
    sections[index].items[subIndex].duration = newVal;
    setSections([...sections]);
  };
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight}`}>
        {item.duration ? item.duration : '[+Add duration]'}
      </label>
      <TextInputEditor
        defaultValue={item.duration}
        htmlFor={htmlFor}
        saveFn={updateSectionDuration}
        title="Edit duration"
        isOptional={true}
      />
    </>
  );
}
