import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';

export default function DeleteSectionBtn({ index, title }: { index: number; title: string }) {
  const [sections, setSections] = useAtom(sectionsAtom);
  const deleteSection = () => {
    const text = `Delete section [${title}] ?`;
    if (!confirm(text)) return;
    const newData = sections.filter((o, i) => i !== index);
    setSections(newData);
  };
  return (
    <button
      className="hover:bg-red-500 text-red-500 border border-red-500 h-fit w-fit my-auto px-2 rounded hover:text-white ml-2"
      onClick={deleteSection}
    >
      Delete
    </button>
  );
}
