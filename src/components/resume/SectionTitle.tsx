import { classHoverHighlight } from '@src/constants/tailwind';
import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionTitle({ defaultValue, index }: { defaultValue: string; index: number }) {
  const htmlFor: string = `sectionTitle_${index}`;
  const [sections, setSections] = useAtom(sectionsAtom);
  const updateSectionTitle = (newTitle: string) => {
    const newSections = sections.map((item, i) => {
      if (i !== index) return item;
      const obj = item;
      obj.displayText = newTitle;
      return obj;
    });
    console.log({ newSections, newTitle });
    setSections(newSections);
  };

  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} mb-[4px] mt-5 uppercase text-left text-3xl w-fit`}>
        {defaultValue ? defaultValue : '[Add section title]'}
      </label>
      <TextInputEditor htmlFor={htmlFor} defaultValue={defaultValue} saveFn={updateSectionTitle} />
    </>
  );
}
