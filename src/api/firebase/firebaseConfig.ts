import firebase from 'firebase';
import firebaseEnv from './firebaseEnv';

export default function firebaseConfiguration() {
  var firebaseConfig = {
    apiKey: firebaseEnv.apiKey,
    authDomain: firebaseEnv.authDomain,
    databaseURL: `https://${firebaseEnv.projectID}.firebaseio.com`,
    projectId: firebaseEnv.projectID,
    storageBucket: `${firebaseEnv.projectID}.appspot.com`,
    messagingSenderId: '514573051703',
    appId: firebaseEnv.appId,
    measurementId: 'G-H0THS4J323',
  };

  // Initialize Firebase
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
}
