import { classHoverHighlight } from '@src/constants/tailwind';
import { TExtraLink } from '@src/types/resume';
import { Fragment, useState } from 'react';
import ExternalLinkEditor from '../modals/ExternalLinkEditor';

type TExternalLinkProps = {
  item: TExtraLink;
  index: number;
};

export default function ExternalLink({ item, index }: TExternalLinkProps) {
  const [link, setLink] = useState<TExtraLink>(item);
  const htmlFor: string = `LinkEdit_${index}`;
  return (
    <Fragment key={index}>
      <label className={`${classHoverHighlight} text-blue-600 w-fit text-10pt font-bold`} htmlFor={htmlFor}>
        {link.displayText}
      </label>
      <ExternalLinkEditor defaultValue={item} saveFn={setLink} htmlFor={htmlFor} title='Update link'/>
    </Fragment>
  );
}
