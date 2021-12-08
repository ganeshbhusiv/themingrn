import React from 'react';
import propTypes from 'prop-types';

import {View as RNView, ViewProps} from 'react-native';
import {useTheme} from '../../Hooks/useTheme';

const View = (props: ViewProps) => {
  const {colors, isDark} = useTheme();

  let {style, ...restProps} = props;

  return (
    <RNView
      style={[
        style,
        isDark
          ? {
              backgroundColor: colors?.background || '#1a1a1a',
              borderColor: colors.white,
            }
          : {},
      ]}
      {...restProps}>
      {props.children}
    </RNView>
  );
};

View.propTypes = {};

View.defaultProps = {};

export default View;
