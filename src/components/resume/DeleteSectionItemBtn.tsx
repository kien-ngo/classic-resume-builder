import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';

export default function DeleteSectionItemBtn({
  index,
  subIndex,
  title,
}: {
  index: number;
  subIndex: number;
  title: string;
}) {
  const [sections, setSections] = useAtom(sectionsAtom);
  const deleteSection = () => {
    const text = `Delete item [${title}] ?`;
    if (!confirm(text)) return;
    sections[index].items = sections[index].items.filter((o, i) => i !== subIndex);
    setSections([...sections]);
  };
  return (
    <button
      className="hover:bg-red-500 text-red-500 border text-xs border-red-500 h-fit w-fit my-auto px-2 rounded hover:text-white ml-2"
      onClick={deleteSection}
    >
      Delete
    </button>
  );
}
