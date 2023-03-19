import { DEFAULT_PROFILE } from '@src/constants/defaultProfile';
import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextareaEditor from '../modals/TextareaEditor';

export default function Intro() {
  const [intro, setIntro] = useState<string>(DEFAULT_PROFILE.intro);
  return (
    <>
      <label
        className={`${classHoverHighlight} py-3 text-10pt border-t border-1 border-light-black`}
        htmlFor="IntroEdit"
      >
        {intro}
      </label>
      <TextareaEditor
        htmlFor="IntroEdit"
        defaultValue={intro}
        textareaCols={50}
        textareaRows={10}
        saveFn={setIntro}
        title="Update intro"
      />
    </>
  );
}
