import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './router/TabRouter';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={null}>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
