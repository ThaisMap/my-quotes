import firebase from 'firebase';
import { Quote } from '../../types';

export function getFirebaseRandomQuote(quoteRetrieved) {
  const quotesRef = firebase.firestore().collection('Quotes');
  let returnQuote: Quote;
  const randomKey = quotesRef.doc().id;
  const orderedRef = quotesRef.orderBy(
    firebase.firestore.FieldPath.documentId()
  );
  console.log('random key: ', randomKey);
  orderedRef
    .withConverter(quoteConverter)
    .where(firebase.firestore.FieldPath.documentId(), '>', randomKey)
    .limit(1)
    .get()
    .then((snapshot) => {
      console.log('snapshot.size bigger then: ', snapshot.size);
      snapshot.forEach((doc) => {
        returnQuote = doc.data() as Quote;
        returnQuote.Key = doc.id;
      });
      if (returnQuote) {
        console.log(`returnQuote= ${returnQuote}`);
        quoteRetrieved(returnQuote);
      } else {
        orderedRef
          .where(firebase.firestore.FieldPath.documentId(), '<', randomKey)
          .limit(1)
          .get()
          .then((snapshot) => {
            console.log('snapshot.size: ', snapshot.size);
            snapshot.forEach((doc) => {
              returnQuote = doc.data() as Quote;
              returnQuote.Key = doc.id;
            });
            console.log(`returnQuote= ${returnQuote}`);
            quoteRetrieved(returnQuote);
          })
          .catch((err) => {
            console.log('Error getting documents', err);
          });
      }
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}

var quoteConverter = {
  toFirestore: function (quote) {
    return {
      randomKey: quote.randomKey,
      Sentence: quote.Sentence,
      Author: quote.Author,
    };
  },
  fromFirestore: function (snapshot, options) {
    const returnQuote = snapshot.data(options) as Quote;
    returnQuote.Key = snapshot.id;
    return returnQuote;
  },
};
