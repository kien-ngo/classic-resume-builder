import { TSection } from '@src/types/resume';
import { Fragment } from 'react';
import AddHighlight from '../modals/AddHighlight';
import AddNewItemBtn from './AddNewItemBtn';
import DeleteSectionBtn from './DeleteSectionBtn';
import DeleteSectionItemBtn from './DeleteSectionItemBtn';
import MoveSectionDownBtn from './MoveSectionDownBtn';
import MoveSectionUpBtn from './MoveSectionUpBtn';
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
      <div className="flex flex-row mb-[4px] mt-10">
        <SectionTitle defaultValue={item.displayText} index={mainIndex} />
        <MoveSectionUpBtn index={mainIndex} />
        <MoveSectionDownBtn index={mainIndex} />
        <DeleteSectionBtn index={mainIndex} title={item.displayText} />
      </div>
      {item.items.map((subItem, index) => (
        <div className="border-t border-light-black flex flex-col pb-5 bg-gray-200" key={subItem.name}>
          <div className="flex flex-row justify-between mt-2">
            <div className="flex flex-row">
              <SectionItemName index={mainIndex} subIndex={index} />
              <DeleteSectionItemBtn index={mainIndex} subIndex={index} title={subItem.name} />
            </div>
            <SectionItemLocation index={mainIndex} subIndex={index} />
          </div>
          <div className="flex flex-row justify-between">
            <SectionItemRole index={mainIndex} subIndex={index} />
            <SectionItemDuration index={mainIndex} subIndex={index} />
          </div>
          <SectionItemLink index={mainIndex} subIndex={index} />
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
                        <SectionItemHighlight index={mainIndex} subIndex={index} subsubIndex={i} />
                      </li>
                    )}
                  </Fragment>
                ))}
              </>
            )}
            <li className="ml-5 list-disc w-fit">
              <label
                className="hover:underline font-bold mt-3 text-orange-600 cursor-pointer"
                htmlFor={`addMoreHighlight_${mainIndex}_${index}`}
              >
                [+ Add new highlight]
              </label>
            </li>
          </ul>
          <AddHighlight htmlFor={`addMoreHighlight_${mainIndex}_${index}`} index={mainIndex} subIndex={index} />
        </div>
      ))}
      <AddNewItemBtn index={mainIndex}/>
    </div>
  );
}
