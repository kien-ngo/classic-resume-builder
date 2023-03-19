import { TExtraLink } from '@src/types/resume';
import { useRef, useState } from 'react';

type TExternalLinkEditorProps = {
  htmlFor: string;
  defaultValue: TExtraLink;
  saveFn: Function;
  title?: string;
};
export default function ExternalLinkEditor(props: TExternalLinkEditorProps) {
  const { htmlFor, defaultValue, saveFn, title } = props;
  const [linkObj, setLinkObj] = useState<TExtraLink>(defaultValue);
  const inputDisplayTextRef = useRef<HTMLInputElement>(null);
  const inputLinkRef = useRef<HTMLInputElement>(null);
  const validateItem = (url: string): boolean => {
    return true;
  };
  const saveValue = () => {
    saveFn(linkObj);
  };
  const resetValue = () => {
    if (inputDisplayTextRef.current) {
      inputDisplayTextRef.current.value = defaultValue.displayText;
    }
    if (inputLinkRef.current) {
      inputLinkRef.current.value = defaultValue.link;
    }
    setLinkObj(defaultValue);
  };
  return (
    <>
      <input type="checkbox" id={htmlFor} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full lg:w-[380px] flex flex-col">
          <div className="w-full top-0 right-0 flex flex-row justify-between">
            <span></span>
            <span className="my-auto pl-8 text-white">{title ? title : 'Edit link'}</span>
            <label htmlFor={htmlFor} className="btn btn-sm btn-circle my-auto">
              ✕
            </label>
          </div>
          <div className="flex flex-col mt-8 mb-16 lg:mb-0 md:mb-0">
            <div className="flex flex-row justify-start">
              <label className="text-white my-auto mr-3 w-[90px] text-right">Display text</label>
              <input
                ref={inputDisplayTextRef}
                className="text-white p-4 text-base w-full"
                defaultValue={defaultValue.displayText}
                onChange={(e) => {
                  setLinkObj({ displayText: e.target.value.trim(), link: linkObj.link });
                }}
              />
            </div>
            <div className="flex flex-row justify-start mt-3">
              <label className="text-white my-auto mr-3 w-[90px] text-right">URL</label>
              <input
                ref={inputLinkRef}
                className="text-white p-4 w-full"
                defaultValue={defaultValue.link}
                onChange={(e) => {
                  setLinkObj({ displayText: linkObj.displayText, link: e.target.value.trim() });
                }}
              />
            </div>
            <div className="flex flex-row flex-wrap justify-between w-[250px] mx-auto mt-5">
              <label htmlFor={htmlFor} className="btn btn-success" onClick={saveValue}>
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
