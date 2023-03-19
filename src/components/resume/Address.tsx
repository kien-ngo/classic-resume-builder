import { classHoverHighlight } from '@src/constants/tailwind';
import { contactAddressAtom } from '@src/store/jotai';
import { useAtom } from 'jotai/react';
import TextInputEditor from '../modals/TextInputEditor';

export default function Address() {
  const [address, setAddress] = useAtom(contactAddressAtom);
  return (
    <>
      <label className={`w-fit mx-auto ${classHoverHighlight}`} htmlFor="AddressEdit">
        {address ? address : '[Add an address]'}
      </label>
      <TextInputEditor
        htmlFor="AddressEdit"
        defaultValue={address}
        saveFn={setAddress}
        title="Update address"
        isOptional={true}
      />
    </>
  );
}
