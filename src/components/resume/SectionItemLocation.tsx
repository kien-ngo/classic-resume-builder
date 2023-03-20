import { classHoverHighlight } from '@src/constants/tailwind';
import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemLocation({ index, subIndex }: { index: number; subIndex: number }) {
  const [sections, setSections] = useAtom(sectionsAtom);
  const item = sections[index].items[subIndex];
  const htmlFor = `sectionLocation_${item.name}_${index}`;
  const updateSectionLocation = (newVal: string) => {
    sections[index].items[subIndex].location = newVal;
    setSections([...sections]);
  };
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} ${!item.location ? 'text-orange-600' : ''}`}>
        {item.location ? item.location : '[+ Add location]'}
      </label>
      <TextInputEditor
        defaultValue={item.location}
        htmlFor={htmlFor}
        saveFn={updateSectionLocation}
        title="Edit role"
        isOptional={true}
      />
    </>
  );
}
