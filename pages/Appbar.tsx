import React from 'react';
import { useTheme, Appbar, Switch } from 'react-native-paper';
import { PreferencesContext } from '../models/PreferencesContext';

const Header = ({ scene }: any) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }
      }
    >
      <Appbar.Content title={scene?.route?.name} />
      <Switch
        color={'red'}
        value={isThemeDark}
        onValueChange={toggleTheme}
      />
    </Appbar.Header>
  );
};
export default Header;

