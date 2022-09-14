import { getAnalytics } from 'firebase/analytics';
import type { FirebaseOptions } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config: FirebaseOptions = {
  apiKey: 'AIzaSyCtCOKdMPvgLQosySIE7bjuVu-fn98bRfM',
  authDomain: 'koralle-firebase-dev.firebaseapp.com',
  projectId: 'koralle-firebase-dev',
  storageBucket: 'koralle-firebase-dev.appspot.com',
  messagingSenderId: '214495093893',
  appId: '1:214495093893:web:518c519745f2a75be9b5ec',
  measurementId: 'G-B5D8N0QJVY',
} as const;

export const app = initializeApp(config);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
