import { extraLinksAtom } from '@src/store/jotai';
import { TExtraLink } from '@src/types/resume';
import { useAtom } from 'jotai';
import { Fragment, useRef } from 'react';
import ExternalLink from './ExternalLink';

export default function ExternalLinksContainer() {
  const [externalLinks, setExternalLinks] = useAtom(extraLinksAtom);
  const inputDisplayTextRef = useRef<HTMLInputElement>(null);
  const inputLinkRef = useRef<HTMLInputElement>(null);
  const cancelAddLink = () => {
    if (inputDisplayTextRef.current) inputDisplayTextRef.current.value = '';
    if (inputLinkRef.current) inputLinkRef.current.value = '';
  };
  const addLink = () => {
    const link: TExtraLink = { link: inputLinkRef.current!.value, displayText: inputDisplayTextRef.current!.value };
    const newLinks:TExtraLink[] = externalLinks.concat(link);
    setExternalLinks(newLinks);
  };
  return (
    <div className="mb-3">
      {externalLinks.map((item, index) => (
        <Fragment key={item.link}>
          <ExternalLink item={item} index={index} />
          {index !== externalLinks.length - 1 ? <span>|</span> : <></>}
        </Fragment>
      ))}
      <label htmlFor="AddExtraLink" className="hover:underline hover:font-bold cursor-pointer">
        [+ Add link]
      </label>
      <input type="checkbox" id="AddExtraLink" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full lg:w-[700px] md:w-[500px] flex flex-col">
          <div className="w-full top-0 right-0 flex flex-row justify-between">
            <span></span>
            <span className="my-auto pl-8 text-white">Add extra link</span>
            <label htmlFor="AddExtraLink" className="btn btn-sm btn-circle my-auto">
              ✕
            </label>
          </div>
          <div className="flex flex-col mt-8 mb-16 lg:mb-0 md:mb-0">
            <div className="flex flex-row justify-start">
              <label className="text-white my-auto mr-3 w-[90px] text-right">Display text</label>
              <input ref={inputDisplayTextRef} className="text-white p-4 text-base w-full" placeholder="Display name" />
            </div>
            <div className="flex flex-row justify-start mt-3">
              <label className="text-white my-auto mr-3 w-[90px] text-right">URL</label>
              <input ref={inputLinkRef} className="text-white p-4 w-full" placeholder="https://somelink.com" />
            </div>
            <div className="flex flex-row flex-wrap justify-between w-[150px] mx-auto mt-5">
              <label htmlFor="AddExtraLink" className="btn btn-success" onClick={addLink}>
                Add
              </label>
              <label htmlFor="AddExtraLink" className="btn btn-error" onClick={cancelAddLink}>
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
