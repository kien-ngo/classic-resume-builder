import { classHoverHighlight } from '@src/constants/tailwind';
import { TExtraLink } from '@src/types/resume';
import ExternalLinkEditor from '../modals/ExternalLinkEditor';

type TExternalLinkProps = {
  item: TExtraLink;
  index: number;
};

export default function ExternalLink({ item, index }: TExternalLinkProps) {
  const htmlFor: string = `LinkEdit_${index}`;
  return (
    <>
      <label className={`${classHoverHighlight} text-blue-600 w-fit text-10pt font-bold`} htmlFor={htmlFor}>
        {item.displayText}
      </label>
      <ExternalLinkEditor defaultValue={item} htmlFor={htmlFor} title='Update link'/>
    </>
  );
}
