import { createContext, useState } from 'react';
import GetRandomImage from '../api/images';
import GetRandomQuote from '../api/quotes';
import { ContentContextData, Quote, BackgroundImage } from '../types';

const ContentContext = createContext<ContentContextData>(
  {} as ContentContextData
);

export const ContentProvider: React.FC = ({ children }) => {
  const [quote, setQuote] = useState<Quote>(GetRandomQuote());

  const [image, setImage] = useState<BackgroundImage>(GetRandomImage());

  function getRandom() {
    const randomQuote = GetRandomQuote();
    setQuote(randomQuote);
    const randomImage = GetRandomImage();
    setImage(randomImage);
  }

  return (
    <ContentContext.Provider value={{ quote, image, getRandom }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
