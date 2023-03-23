import AddSectionItem from '../modals/AddSectionItem';

export default function AddNewItemBtn({ index }: { index: number }) {
  const htmlFor = `AddSectionItem_${index}`;
  return (
    <>
      <label htmlFor={htmlFor} className="w-fit mt-6 cursor-pointer hover:underline font-bold text-orange-600">
        [+ Add new item]
      </label>
      <AddSectionItem index={index} htmlFor={htmlFor} />
    </>
  );
}
