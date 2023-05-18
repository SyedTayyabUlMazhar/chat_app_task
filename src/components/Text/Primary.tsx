import React from 'react';
import {Text, TextProps} from 'react-native';
import useTheme from '../../hooks/useTheme';

const Primary = (props: TextProps) => {
  const {style, ...rest} = props;
  const theme = useTheme();
  return <Text style={[{color: theme.primary}, style]} {...rest} />;
};

export default Primary;
