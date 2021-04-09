import { createContext, useState } from 'react';
import { getFirebaseRandomQuote } from '../api/firebase/getQuotes';
import GetRandomImage from '../api/images';
import GetRandomQuote from '../api/quotes';
import { ContentContextData, Quote, BackgroundImage } from '../types';

const ContentContext = createContext<ContentContextData>(
  {} as ContentContextData
);

export const ContentProvider: React.FC = ({ children }) => {
  const defaultQuote: Quote = {
    Author: 'Dalai Lama',
    Sentence: 'The purpose of our lives is to be happy',
  };
  const [quote, setQuote] = useState<Quote>(defaultQuote);

  const [image, setImage] = useState<BackgroundImage>(GetRandomImage());

  const onQuoteReceived = (randomQuote) => {
    console.log('received quote', randomQuote);
    setQuote(randomQuote);
  };
  function getRandom() {
    const randomImage = GetRandomImage();
    setImage(randomImage);
    getFirebaseRandomQuote(onQuoteReceived);
  }

  return (
    <ContentContext.Provider value={{ quote, image, getRandom }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
