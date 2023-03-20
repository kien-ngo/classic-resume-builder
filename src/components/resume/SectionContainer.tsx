import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import AddSection from '../modals/AddSection';
import Section from './Section';

export default function SectionContainer() {
  const [sections] = useAtom(sectionsAtom);
  return (
    <>
      {sections.map((item, index) => (
        <Section item={item} mainIndex={index} key={item.displayText} />
      ))}
      <label
        htmlFor="AddNewSection"
        className="cursor-pointer font-bold hover:underline text-16pt mt-4 text-orange-600"
      >
        {'>>>'} Add new section {'<<<'}
      </label>
      <AddSection />
    </>
  );
}
