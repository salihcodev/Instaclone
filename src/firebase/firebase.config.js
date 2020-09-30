import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: 'AIzaSyDjI9Il8RXRamyylXl4_9FBTVqrCq5iOk8',
  authDomain: 'instaclone-101f8.firebaseapp.com',
  databaseURL: 'https://instaclone-101f8.firebaseio.com',
  projectId: 'instaclone-101f8',
  storageBucket: 'instaclone-101f8.appspot.com',
  messagingSenderId: '639265410353',
  appId: '1:639265410353:web:395360818df315d1ebb410',
  measurementId: 'G-XS2MSEWST4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
