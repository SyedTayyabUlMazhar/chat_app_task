import React from 'react';
import {Text, TextProps} from 'react-native';
import useTheme from '../../hooks/useTheme';

const TextOnSecondary = (props: TextProps) => {
  const {style, ...rest} = props;
  const theme = useTheme();
  return <Text style={[{color: theme.secondaryText}, style]} {...rest} />;
};

export default TextOnSecondary;
