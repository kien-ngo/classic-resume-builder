import { classHoverHighlight } from '@src/constants/tailwind';
import { introAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import TextareaEditor from '../modals/TextareaEditor';

export default function Intro() {
  const [intro, setIntro] = useAtom(introAtom);
  return (
    <>
      <label
        className={`${classHoverHighlight} py-3 text-10pt border-t border-1 border-light-black`}
        htmlFor="IntroEdit"
      >
        {intro ? intro : '[Add your introduction]'}
      </label>
      <TextareaEditor
        htmlFor="IntroEdit"
        defaultValue={intro}
        textareaCols={50}
        textareaRows={10}
        saveFn={setIntro}
        title="Update intro"
        isOptional={true}
      />
    </>
  );
}
