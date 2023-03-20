import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';

export default function MoveSectionUpBtn({ index }: { index: number }) {
  if (index === 0) return <></>; // hide this button if it's the first section
  const [sections, setSections] = useAtom(sectionsAtom);
  const moveBtnUp = () => {
    const prevIndex = index - 1;
    [sections[prevIndex], sections[index]] = [sections[index], sections[prevIndex]];
    setSections([...sections]);
  };
  return (
    <button
      className="hover:bg-blue-600 border border-blue-600 text-blue-600 h-fit w-fit my-auto px-2 rounded hover:text-white ml-2"
      onClick={moveBtnUp}
    >
      Move up
    </button>
  );
}
