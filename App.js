import * as eva from '@eva-design/eva';

import { SplashScreen } from './screens/SplashScreen';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from './navigation/AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
            <AppNavigator />
        </SafeAreaProvider>
    </ApplicationProvider>
  </>
);
