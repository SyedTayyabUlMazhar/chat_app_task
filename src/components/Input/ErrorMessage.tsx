import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {ErrorMessageProps} from './types';
import useTheme from '../../hooks/useTheme';

const ErrorMessage = (props: ErrorMessageProps) => {
  const {message, style} = props;
  const theme = useTheme();

  return (
    <Text style={[styles.errorText, {color: theme.error}, style]}>
      {message}
    </Text>
  );
};

export default ErrorMessage;
