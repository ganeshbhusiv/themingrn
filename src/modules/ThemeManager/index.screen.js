import React from 'react';
import {TouchableOpacity} from 'react-native';

import Text from '../../components/View/Text';
import View from '../../components/View/View';
import {useTheme} from '../../Hooks/useTheme';

import styles from './index.style';

const ThemeManager = props => {
  const {navigation} = props;

  const {isDark, setScheme, themeMode, themeType} = useTheme();

  const options = {
    isDark: isDark,
    user_centric: themeMode === 'user_centric',
  };

  const isDefaultDark = options.isDark && options.user_centric;
  const isDefaultLight = !options.isDark && options.user_centric;
  const isDefaultTheme = !options.user_centric;

  const changeTheme = (mode, type, themeSeletion) => {
    setScheme(mode, type, themeSeletion);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.themeHeader}>
        Default Themes (Dark/Light)
      </Text>
      <TouchableOpacity onPress={() => changeTheme('dark', 'user_centric', 'dark_theme1')}>
        <View style={styles.cta}>
          {themeType === 'dark_theme1' ? (
            <Text style={styles.icon}>
              
            </Text>
          ) : (
            <Text style={styles.noIcon} />
          )}
          <Text style={styles.ctaTitle}>Always On</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeTheme('light', 'user_centric', 'light_theme1')}>
        <View style={styles.cta}>
          {themeType === 'light_theme1' ? (
            <Text style={styles.icon}>
              
            </Text>
          ) : (
            <Text style={styles.noIcon} />
          )}
          <Text style={styles.ctaTitle}>Off</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeTheme('automatic', 'automatic', 'automatic')}>
        <View style={styles.cta}>
          {themeType === 'automatic' ? (
            <Text style={styles.icon}>
              
            </Text>
          ) : (
            <Text style={styles.noIcon} />
          )}
          <Text style={styles.ctaTitle}>
            Default Selection
            <Text style={styles.subTitle}>
              {`\nIt will be based on default system theme`}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.themeHeader}>
        Custom Themes
      </Text>
      <TouchableOpacity onPress={() => changeTheme('light', 'user_centric', 'blue_theme1')}>
        <View style={styles.cta}>
          {themeType === 'blue_theme1' ? (
            <Text style={styles.icon} />
          ) : (
            <Text style={styles.noIcon} />
          )}
          <Text style={styles.ctaTitle}>
            Blue theme
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeTheme('light', 'user_centric', 'vtheme_1')}>
        <View style={styles.cta}>
          {themeType === 'vtheme_1' ? (
            <Text style={styles.icon} />
          ) : (
            <Text style={styles.noIcon} />
          )}
          <Text style={styles.ctaTitle}>
            VTheme
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeManager;
