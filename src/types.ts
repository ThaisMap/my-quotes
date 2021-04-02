export interface Quote {
  text: string;
  from: string;
}

export interface BackgroundImage {
  filename: string;
  link: string;
  credits: string;
}

export interface ContentContextData{
  quote: Quote;
  image: BackgroundImage;
  getRandom() : void;
}