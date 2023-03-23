import { classHoverHighlight } from '@src/constants/tailwind';
import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemRole({ index, subIndex }: { index: number; subIndex: number }) {
  const [sections, setSections] = useAtom(sectionsAtom);
  const item = sections[index].items[subIndex];
  const htmlFor: string = `sectionRole_${item.name}_${index}`;
  const updateSectionRole = (newVal: string) => {
    sections[index].items[subIndex].title = newVal;
    setSections([...sections]);
  };
  return (
    <>
      <label htmlFor={htmlFor} className={`font-bold ${classHoverHighlight} ${!item.title ? 'text-orange-600' : ''}`}>
        {item.title ? item.title : '[+ Add a role/title]'}
      </label>
      <TextInputEditor defaultValue={item.title} htmlFor={htmlFor} saveFn={updateSectionRole} title="Edit role" />
    </>
  );
}
