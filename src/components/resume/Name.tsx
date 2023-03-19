import { classHoverHighlight } from '@src/constants/tailwind';
import { nameAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextInputEditor from '../modals/TextInputEditor';

export default function Name() {
  const [name, setName] = useAtom(nameAtom);
  return (
    <>
      <label className={`w-fit mx-auto text-center mt-0 text-32pt ${classHoverHighlight}`} htmlFor="NameEdit">
        {name}
      </label>
      <TextInputEditor htmlFor="NameEdit" defaultValue={name} saveFn={setName} title="Update name" />
    </>
  );
}
