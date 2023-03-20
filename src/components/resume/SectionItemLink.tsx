import { classHoverHighlight } from '@src/constants/tailwind';
import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemLink({ index, subIndex }: { index: number; subIndex: number }) {
  const [sections, setSections] = useAtom(sectionsAtom);
  const item = sections[index].items[subIndex];
  const htmlFor = `sectionLink_${item.name}_${index}`;
  const updateSectionLink = (newVal: string) => {
    sections[index].items[subIndex].link = newVal;
    setSections([...sections]);
  };
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`${classHoverHighlight} text-blue-600 w-fit text-10pt font-bold ${
          !item.link ? 'text-orange-600' : ''
        }`}
      >
        {item.link ? item.link : '[+ Add a link]'}
      </label>
      <TextInputEditor defaultValue={item.link} htmlFor={htmlFor} saveFn={updateSectionLink} isOptional={true} />
    </>
  );
}
