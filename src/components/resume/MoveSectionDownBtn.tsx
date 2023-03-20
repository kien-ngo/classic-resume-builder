import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';

export default function MoveSectionDownBtn({ index }: { index: number }) {
  const [sections, setSections] = useAtom(sectionsAtom);
  if (index === sections.length - 1) return <></>; // hide this button if it's the last section
  const moveBtnDown = () => {
    const nextIndex = index + 1;
    [sections[nextIndex], sections[index]] = [sections[index], sections[nextIndex]];
    setSections([...sections]);
  };
  return (
    <button
      className="hover:bg-blue-600 border border-blue-600 text-blue-600 h-fit w-fit my-auto px-2 rounded hover:text-white ml-2"
      onClick={moveBtnDown}
    >
      Move down
    </button>
  );
}
