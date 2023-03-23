import { sectionsAtom } from '@src/store/jotai';
import { closePopup } from '@src/utils/closePopup';
import { useAtom } from 'jotai';
import { useRef } from 'react';

type TAddSectionItem = {
  index: number;
  htmlFor: string;
};

export default function AddSectionItem(props: TAddSectionItem) {
  const { index, htmlFor } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [sections, setSections] = useAtom(sectionsAtom);
  const addNewSectionItem = () => {
    if (!inputRef.current?.value) {
      alert('text cannot be empty');
      return;
    }
    const value = inputRef.current.value;
    sections[index].items.push({ name: value, link: '', location: '', duration: '', highlights: [], title: '' });
    setSections([...sections]);
  };
  const resetValue = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    addNewSectionItem();
    closePopup(htmlFor);
  };
  return (
    <>
      <input type="checkbox" id={htmlFor} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full lg:w-[700px] md:w-[500px] flex flex-col">
          <div className="w-full top-0 right-0 flex flex-row justify-between">
            <span></span>
            <span className="my-auto pl-8 text-white">Add new highlight</span>
            <label htmlFor={htmlFor} className="btn btn-sm btn-circle my-auto">
              ✕
            </label>
          </div>
          <div className="flex flex-col mt-8">
            <input ref={inputRef} className="text-white p-4 text-base" onKeyUp={(e) => handleKeyUp(e)} />

            <div className="flex flex-row flex-wrap justify-between w-[250px] mx-auto mt-5">
              <label htmlFor={htmlFor} className="btn btn-success" onClick={addNewSectionItem}>
                Save
              </label>
              <button className="btn btn-warning" onClick={resetValue}>
                Reset
              </button>
              <label htmlFor={htmlFor} className="btn btn-error" onClick={resetValue}>
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
