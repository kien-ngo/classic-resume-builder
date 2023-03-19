import { extraLinksAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import ExternalLink from './ExternalLink';

export default function ExternalLinksContainer() {
  const [externalLinks] = useAtom(extraLinksAtom);
  return (
    <div className="mb-3">
      {externalLinks.map((item, index) => (
        <Fragment key={item.link}>
          <ExternalLink item={item} index={index} />
          {index !== externalLinks.length - 1 ? <span>|</span> : <></>}
        </Fragment>
      ))}
    </div>
  );
}
