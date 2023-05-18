import React from 'react';
import {Text, TextProps} from 'react-native';
import useTheme from '../../hooks/useTheme';

const TextOnPrimary = (props: TextProps) => {
  const {style, ...rest} = props;
  const theme = useTheme();
  return <Text style={[{color: theme.primaryText}, style]} {...rest} />;
};

export default TextOnPrimary;
