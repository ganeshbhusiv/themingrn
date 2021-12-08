import React, {useEffect, useState} from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../modules/Home/index.screen';
import Settings from '../modules/Settings/index.screen';
import ThemeManager from '../modules/ThemeManager/index.screen';
import {themeFinder, useTheme} from '../Hooks/useTheme';
import {BlueTheme1, DarkTheme1, LightTheme1} from '../styles/themeColors';

const StackNav = createNativeStackNavigator();

const AppRoot = () => {
  const {isDark, themeType = 'light_theme1'} = useTheme();
  const [userThemeType, setThemeType] = useState(LightTheme1);

  useEffect(() => {
    let theme = themeFinder[themeType];
    setThemeType(theme);
  }, [isDark, themeType]);

  return (
    <NavigationContainer theme={userThemeType}>
      <StackNav.Navigator>
        <StackNav.Screen name={'Home'}  options={{title: 'Study'}} component={Home} />
        <StackNav.Screen name={'Settings'} options={{title: 'Settings'}} component={Settings} />
        <StackNav.Screen name={'ThemeManager'} options={{title: 'Theme Page'}} component={ThemeManager} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default AppRoot;
