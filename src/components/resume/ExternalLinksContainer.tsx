import { extraLinksAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import ExternalLink from './ExternalLink';

export default function ExternalLinksContainer() {
  const [externalLinks] = useAtom(extraLinksAtom);
  return (
    <div className="mb-3">
      {externalLinks.map((item, index) => (
        <>
          <ExternalLink item={item} index={index} key={item.link} />
          {index !== externalLinks.length - 1 ? <span>|</span> : <></>}
        </>
      ))}
    </div>
  );
}
