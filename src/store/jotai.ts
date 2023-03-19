import { DEFAULT_PROFILE } from '@src/constants/defaultProfile';
import { TExtraLink, TSection } from '@src/types/resume';
import { atom } from 'jotai';

export const nameAtom = atom<string>(DEFAULT_PROFILE.name);
export const introAtom = atom<string>(DEFAULT_PROFILE.intro);
export const contactAddressAtom = atom<string>(DEFAULT_PROFILE.contact.address);
export const phoneNumberAtom = atom<string>(DEFAULT_PROFILE.contact.phone);
export const emailAtom = atom<string>(DEFAULT_PROFILE.contact.email);
export const extraLinksAtom = atom<TExtraLink[]>(DEFAULT_PROFILE.extraLinks);
export const sectionsAtom = atom<TSection[]>(DEFAULT_PROFILE.sections);
