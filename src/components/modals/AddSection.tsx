import { sectionsAtom } from '@src/store/jotai';
import { TSection } from '@src/types/resume';
import { useAtom } from 'jotai';
import { useRef } from 'react';

type TAddHighlightProps = {};

export default function AddSection(props: TAddHighlightProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [sections, setSections] = useAtom(sectionsAtom);
  const addNewSectionHighlight = () => {
    if (!inputRef.current?.value) {
      alert('text cannot be empty');
      return;
    }
    const value = inputRef.current.value;
    const newSection: TSection = {
      displayText: value,
      items: [],
    };
    sections.push(newSection);
    setSections([...sections]);
  };
  const resetValue = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  const closePopup = () => {
    const _switch = document.getElementById('AddNewSection') as HTMLInputElement;
    _switch.checked = false;
  };
  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    addNewSectionHighlight();
    closePopup();
  };
  return (
    <>
      <input type="checkbox" id="AddNewSection" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full lg:w-[700px] md:w-[500px] flex flex-col">
          <div className="w-full top-0 right-0 flex flex-row justify-between">
            <span></span>
            <span className="my-auto pl-8 text-white">Add new section</span>
            <label htmlFor="AddNewSection" className="btn btn-sm btn-circle my-auto">
              ✕
            </label>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row justify-start">
              <label className="text-white my-auto mr-3 w-[90px] text-right">Section title</label>
              <input
                className="text-white p-4 text-base w-full"
                placeholder='eg. "Volunteer", "Work Experience" etc.'
                ref={inputRef}
                onKeyUp={handleKeyUp}
              />
            </div>
            <div className="flex flex-row flex-wrap justify-between w-[250px] mx-auto mt-5">
              <label htmlFor="AddNewSection" className="btn btn-success" onClick={addNewSectionHighlight}>
                Save
              </label>
              <button className="btn btn-warning" onClick={resetValue}>
                Reset
              </button>
              <label htmlFor="AddNewSection" className="btn btn-error" onClick={resetValue}>
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
