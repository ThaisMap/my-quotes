export default {
  apiKey: process.env.FIREBASE_API_KEY ?? '',
  appId: process.env.FIREBASE_APP_ID ?? '',
  projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? '',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? '',
};
