import * as React from 'react';
import {Appearance, useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DarkTheme1, LightTheme1, BlueTheme1, VTheme1} from '../styles/themeColors';

//LightTheme1 - light_theme1
//DarkTheme1 - dark_theme1
//BlueTheme1 - blue_theme1

export const themeFinder = {light_theme1: LightTheme1, dark_theme1: DarkTheme1, blue_theme1: BlueTheme1, vtheme_1: VTheme1}
export const ThemeContext = React.createContext({
  isDark: false,
  themeMode: 'user_centric',
  themeType: 'light_theme1',
  colors: LightTheme1,
  setScheme: () => {},
  systemTheme: 'light',
});

export const ThemeProvider = props => {
  const stateData = useSelector(state => state.themeModule);
  const dispatch = useDispatch();

  const appColorScheme = useColorScheme();

  const colorScheme = stateData?.theme || appColorScheme; // Can be dark | light | no-preference
  const themeMode = stateData?.themeMode ?? 'automatic';
  const themeType = stateData?.themeType ?? 'light_theme1';
  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

  React.useEffect(() => {
    const listener = () => {
      const colorScheme1 = Appearance.getColorScheme();
      if (themeMode === 'automatic') {
        updateTheme(colorScheme1, 'automatic');
      }
    };

    const subscription = Appearance.addChangeListener(listener);
    return () => {
      subscription.remove(listener);
    };
  }, []);

  React.useEffect(() => {
    if (themeMode === 'user_centric') {
      setIsDark(colorScheme === 'dark');
    } else {
      setIsDark(appColorScheme === 'dark');
    }
  }, [appColorScheme]);

  const updateTheme = (scheme, themeMode, themeType) => {
    let newScheme = scheme;

    if (themeMode === 'automatic') {
      newScheme = Appearance.getColorScheme();
    }
    setIsDark(newScheme === 'dark');
    dispatch({
      type: 'TOGGLE_THEME',
      data: {scheme: newScheme, themeMode, themeType},
    });
  };

  const defaultTheme = {
    isDark,
    colors: themeFinder[themeType],
    themeMode: themeMode,
    systemTheme: appColorScheme,
    themeType: themeType,
    setScheme: (scheme, themeMode, themeType) => {
      updateTheme(scheme, themeMode, themeType);
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
