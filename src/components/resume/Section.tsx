import { TSection } from '@src/types/resume';
import { Fragment } from 'react';
import SectionItemDuration from './SectionItemDuration';
import SectionItemHighlight from './SectionItemHighlight';
import SectionItemLink from './SectionItemLink';
import SectionItemLocation from './SectionItemLocation';
import SectionItemName from './SectionItemName';
import SectionItemRole from './SectionItemRole';
import SectionTitle from './SectionTitle';

type TSectionProps = {
  item: TSection;
  mainIndex: number;
};
export default function Section(props: TSectionProps) {
  const { item, mainIndex } = props;
  return (
    <div className="flex flex-col">
      <SectionTitle defaultValue={item.displayText} index={mainIndex} />
      {item.items.map((subItem, index) => (
        <div className="border-t border-light-black flex flex-col pb-5" key={subItem.name}>
          <div className="flex flex-row justify-between mt-2">
            <SectionItemName index={mainIndex} subIndex={index} />
            <SectionItemLocation index={mainIndex} subIndex={index} />
          </div>
          <div className="flex flex-row justify-between">
            <SectionItemRole index={mainIndex} subIndex={index} />
            <SectionItemDuration index={mainIndex} subIndex={index} />
          </div>
          <SectionItemLink index={mainIndex} subIndex={index} />
          {subItem.highlights.length && (
            <ul className="pl-[6px] mt-[5px]">
              {subItem.highlights.map((highlight, i) => (
                <Fragment key={i}>
                  {highlight && (
                    <li
                      className={`text-10pt ml-3 text-left list-disc ${
                        i < subItem.highlights.length - 1 ? 'mb-3' : ''
                      }`}
                    >
                      <SectionItemHighlight index={mainIndex} subIndex={index} subsubIndex={i} />
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          )}
          <button
            className="hover:underline hover:font-bold mt-3"
            onClick={() => {
              alert('Coming soon');
            }}
          >
            [+ Add new highlight]
          </button>
        </div>
      ))}
    </div>
  );
}
