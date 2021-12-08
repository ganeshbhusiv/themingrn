import React from 'react';
import propTypes from 'prop-types';

import {Text as RNText, TextProps} from 'react-native';
import { themeFinder, useTheme } from '../../Hooks/useTheme';

const Text = (props: TextProps) => {
  const {colors, isDark, themeType} = useTheme();

  const theme = themeFinder[themeType]

  const {style, exception = false, ...restProps} = props;

  return (
    <RNText {...restProps} style={[style, {color: theme?.colors?.text}]}>
      {props.children}
    </RNText>
  )
}

Text.propTypes = {};

Text.defaultProps = {};

export default Text;