import { TSection } from '@src/types/resume';
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
            <SectionItemName defaultValue={subItem.name ?? ''} index={index} />
            <SectionItemLocation defaultValue={subItem.location ?? ''} index={index} />
          </div>
          <div className="flex flex-row justify-between">
            <SectionItemRole defaultValue={subItem.title ?? ''} index={index} />
            <SectionItemDuration defaultValue={subItem.duration ?? ''} index={index} />
          </div>
          <SectionItemLink defaultValue={subItem.link ?? ''} index={index} />
          {subItem.highlights.length && (
            <ul className="pl-[6px] mt-[5px]">
              {subItem.highlights.map((highlight, i) => (
                <li
                  className={`text-10pt ml-3 text-left list-disc ${i < subItem.highlights.length - 1 ? 'mb-3' : ''}`}
                  key={i}
                >
                  <SectionItemHighlight defaultValue={highlight} index={i }/>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
