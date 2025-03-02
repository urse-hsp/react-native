import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './router/TabRouter';
// import StackRouter from './router/TabRouter copy';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { PreferencesContext } from './models/PreferencesContext';
import {
  MD2DarkTheme,
  MD2LightTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

const CombinedDefaultTheme = merge(MD2LightTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(MD2DarkTheme, NavigationDarkTheme);


export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme: any = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <SafeAreaProvider initialMetrics={null}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <StackRouter />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </PreferencesContext.Provider>
  );
}
