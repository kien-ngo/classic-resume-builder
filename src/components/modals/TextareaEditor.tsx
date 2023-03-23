import { closePopup } from '@src/utils/closePopup';
import { useRef } from 'react';

type TTextEditorProps = {
  htmlFor: string;
  defaultValue: string;
  textareaCols: number;
  textareaRows: number;
  saveFn: Function;
  title?: string;
  isOptional?: boolean;
};

export default function TextareaEditor(props: TTextEditorProps) {
  const { htmlFor, defaultValue, textareaCols, textareaRows, saveFn, title, isOptional } = props;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const resetValue = () => {
    if (inputRef.current) {
      inputRef.current.value = defaultValue;
    }
  };

  const deleteItem = () => {
    saveFn('');
    closePopup(htmlFor);
  };
  return (
    <>
      <input type="checkbox" id={htmlFor} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full lg:w-[700px] md:w-[500px] flex flex-col">
          <div className="w-full top-0 right-0 flex flex-row justify-between">
            <span></span>
            <span className="my-auto pl-8 text-white">{title ? title : 'Edit text'}</span>
            <label htmlFor={htmlFor} className="btn btn-sm btn-circle my-auto">
              ✕
            </label>
          </div>
          <div className="flex flex-col mt-8">
            <textarea
              ref={inputRef}
              className="text-white p-4 text-base"
              cols={textareaCols}
              rows={textareaRows}
              defaultValue={defaultValue}
            ></textarea>
            {isOptional && (
              <button className="text-red-500 mt-2 hover:underline" onClick={deleteItem}>
                [ DELETE THIS ITEM ]
              </button>
            )}
            <div className="flex flex-row flex-wrap justify-between w-[250px] mx-auto mt-5">
              <label
                htmlFor={htmlFor}
                className="btn btn-success"
                onClick={() => saveFn(inputRef.current?.value ?? '')}
              >
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
