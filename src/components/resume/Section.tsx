import { classHoverHighlight } from '@src/constants/tailwind';
import { TSection } from '@src/types/resume';
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
      <SectionTitle sectionTitle={item.displayText} index={mainIndex} />
      {item.items.map((subItem, index) => (
        <div className="border-t border-light-black flex flex-col pb-5" key={subItem.name}>
          <div className="flex flex-row justify-between mt-2">
            <SectionItemName sectionName={subItem.name} index={index} />
            {subItem.location && <span>{subItem.location}</span>}
          </div>
          <div className="flex flex-row justify-between">
            <SectionItemRole sectionItemRole={subItem.title} index={index} />
            {subItem.duration && <span>{subItem.duration}</span>}
          </div>
          {subItem.link && (
            <label className={`${classHoverHighlight} text-blue-600 w-fit text-10pt font-bold`}>{subItem.link}</label>
          )}
          {subItem.highlights.length && (
            <ul className="pl-[6px] mt-[5px]">
              {subItem.highlights.map((highlight, i) => (
                <li
                  className={`text-10pt ml-3 text-left list-disc ${i < subItem.highlights.length - 1 ? 'mb-3' : ''}`}
                  key={i}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
