import { TEmail, TSecuredUrl } from './auth';

export type TExtraLink = {
  displayText: string;
  link: TSecuredUrl;
};
export type TSection = {
  displayText: string;
  items: TSectionItem[];
};
export type TSectionItem = {
  link: TSecuredUrl | null;
  name: string;
  duration: string;
  location: string;
  title: string;
  highlights: string[];
};
export type TProfileContact = {
  address: string;
  phone: string;
  email: TEmail;
};
export type TResumeProfile = {
  name: string;
  contact: TProfileContact;
  extraLinks: TExtraLink[];
  intro: string;
  sections: TSection[];
};
