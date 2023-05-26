import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AffixProps} from './types';
import useTheme from '../../hooks/useTheme';

const Affix = (props: AffixProps) => {
  const {type, style, children, isInputFocused} = props;

  const theme = useTheme();

  return (
    <View
      style={[
        styles.defaultBorder,
        type === 'prefix' ? styles.noEndBorder : styles.noStartBorder,
        isInputFocused ? {borderColor: theme.primary} : null,
        style,
      ]}>
      {children}
    </View>
  );
};

export default Affix;
