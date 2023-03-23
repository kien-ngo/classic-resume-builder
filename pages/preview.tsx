import {
  contactAddressAtom,
  emailAtom,
  extraLinksAtom,
  introAtom,
  nameAtom,
  phoneNumberAtom,
  sectionsAtom,
} from '@src/store/jotai';
import { useAtom } from 'jotai';
import { Fragment } from 'react';

export default function PreviewPage() {
  const [name] = useAtom(nameAtom);
  const [intro] = useAtom(introAtom);
  const [email] = useAtom(emailAtom);
  const [phone] = useAtom(phoneNumberAtom);
  const [address] = useAtom(contactAddressAtom);
  const [extraLinks] = useAtom(extraLinksAtom);
  const [sections] = useAtom(sectionsAtom);
  return (
    <div className="flex">
      <div className="w-[210mm] min-h-[297mm] py-[2cm] px-[1cm] m-auto bg-slate-100 text-black flex flex-col">
        <div className="w-fit mx-auto text-center mt-0 text-32pt">{name ? name : 'MISSING-NAME'}</div>
        <div className="text-center flex flex-col text-11pt">
          <div className="flex flex-col">
            {address && <div className="w-fit mx-auto">{address}</div>}
            {phone && <div className="w-fit mx-auto">{phone}</div>}
            {email && <div className="w-fit mx-auto">{email}</div>}
            {extraLinks && extraLinks.length > 0 && (
              <div className="mb-3">
                {extraLinks.map((item, index) => (
                  <Fragment key={item.link}>
                    <a href={item.link} target="_blank" className="text-blue-600 w-fit text-10pt font-bold text-sm">
                      {item.displayText}
                    </a>
                    {index !== extraLinks.length - 1 ? <span>|</span> : <></>}
                  </Fragment>
                ))}
              </div>
            )}
          </div>
          {intro && <div className="py-3 text-10pt border-t border-1 border-light-black">{intro}</div>}
          {sections && sections.length && (
            <>
              {sections.map((item, mainIndex) => (
                <div className="flex flex-col" key={item.displayText}>
                  {item.displayText && (
                    <div className="uppercase text-left text-3xl w-fit mb-[4px] mt-10">{item.displayText}</div>
                  )}
                  {item.items && item.items.length > 0 && (
                    <>
                      {item.items.map((subItem, index) => (
                        <div className="border-t border-light-black flex flex-col pb-5 bg-gray-200 px-2" key={subItem.name}>
                          <div className="flex flex-row justify-between mt-2">
                            <div className="text-16pt font-bold">{subItem.name}</div>
                            {subItem.location && <div className="h-fit my-auto">{subItem.location}</div>}
                          </div>
                          <div className="flex flex-row justify-between">
                            {subItem.title && <div>{subItem.title}</div>}
                            {subItem.duration && <div>{subItem.duration}</div>}
                          </div>
                          <a href={subItem.link} target="_blank" className="text-blue-600 w-fit text-10pt font-bold">
                            {subItem.link}
                          </a>
                          <ul className="pl-[6px] mt-[5px]">
                            {subItem.highlights.length > 0 && (
                              <>
                                {subItem.highlights.map((highlight, i) => (
                                  <Fragment key={i}>
                                    {highlight && (
                                      <li
                                        className={`text-10pt ml-5 text-left list-disc ${
                                          i < subItem.highlights.length - 1 ? 'mb-3' : ''
                                        }`}
                                      >
                                        {highlight}
                                      </li>
                                    )}
                                  </Fragment>
                                ))}
                              </>
                            )}
                          </ul>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
