import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import Section from './Section';

export default function SectionContainer() {
  const [sections] = useAtom(sectionsAtom);
  return (
    <>
      {sections.map((item, index) => (
        <Section item={item} mainIndex={index} key={item.displayText} />
      ))}
    </>
  );
}
