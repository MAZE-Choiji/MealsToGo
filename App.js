import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';

import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: "AIzaSyCLFHysAfVFttxwCsBaWio3fXhaiZc0fOk",
  authDomain: "mealstogo-c1f28.firebaseapp.com",
  projectId: "mealstogo-c1f28",
  storageBucket: "mealstogo-c1f28.appspot.com",
  messagingSenderId: "701248697970",
  appId: "1:701248697970:web:0b28c4136c2adf4a38b4eb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={ theme }>
        <AuthenticationContextProvider>
          <Navigation/>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}


