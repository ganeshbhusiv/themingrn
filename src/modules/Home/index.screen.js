import React from 'react';
import {TouchableOpacity, Text as RNText} from 'react-native';

import Text from '../../components/View/Text';
import View from '../../components/View/View';

import styles from './index.style'

const Home = props => {
  const {navigation} = props;
  const onPressTheme = () => {
    navigation.navigate('ThemeManager');
  };
  // return (
  //   <RNText>Welcome normal text</RNText>
  // )
  return (
    <View style={styles.container}>
      <Text>It's Home page</Text>


      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

      <TouchableOpacity onPress={onPressTheme}>
        <Text style={styles.btn}>Open Theme Manager</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
