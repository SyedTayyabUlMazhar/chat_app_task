import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {InputProps} from './types';
import styles from './styles';
import useTheme from '../../hooks/useTheme';

const Input = (props: InputProps) => {
  const {
    style,
    onFocus,
    onBlur,
    errorMessage,
    inputStyle,
    errorStyle,
    ...rest
  } = props;

  const theme = useTheme();

  const [isFocused, setIsFoucsed] = useState(false);

  const _onFocus: InputProps['onFocus'] = e => {
    setIsFoucsed(true);
    onFocus?.(e);
  };
  const _onBlur: InputProps['onBlur'] = e => {
    setIsFoucsed(false);
    onBlur?.(e);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[
          styles.input,
          isFocused ? [{borderColor: theme.primary}, styles.focused] : null,
          {color: theme.secondaryText},
          inputStyle,
        ]}
        {...rest}
        onFocus={_onFocus}
        onBlur={_onBlur}
      />
      {errorMessage ? (
        <Text style={[styles.errorText, {color: theme.error}, errorStyle]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;
