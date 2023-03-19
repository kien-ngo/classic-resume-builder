export type TExtraLink = {
  displayText: string;
  link: string;
};
export type TSection = {
  displayText: string;
  items: TSectionItem[];
};
export type TSectionItem = {
  link: string;
  name: string;
  duration: string;
  location: string;
  title: string;
  highlights: string[];
};
export type TProfileContact = {
  address: string;
  phone: string;
  email: string;
};
export type TResumeProfile = {
  name: string;
  contact: TProfileContact;
  extraLinks: TExtraLink[];
  intro: string;
  sections: TSection[];
};
