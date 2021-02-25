interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

//home, office, studio
export enum PhonType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}
