import { DEFAULT_PROFILE } from '@src/constants/defaultProfile';
import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function Address() {
  const [address, setAddress] = useState<string>(DEFAULT_PROFILE.contact.address);
  return (
    <>
      <label className={`w-fit mx-auto ${classHoverHighlight}`} htmlFor="AddressEdit">
        {address}
      </label>
      <TextInputEditor htmlFor="AddressEdit" defaultValue={address} saveFn={setAddress} title="Update address" />
    </>
  );
}
