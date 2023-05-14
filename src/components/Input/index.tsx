import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {InputProps} from './types';
import styles from './styles';
import useTheme from '../../hooks/useTheme';

const Input = (props: InputProps) => {
  const {style, onFocus, onBlur, ...rest} = props;

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
    <TextInput
      style={[
        styles.container,
        isFocused ? [{borderColor: theme.primary}, styles.focused] : null,
        {color: theme.secondaryText},
        style,
      ]}
      {...rest}
      onFocus={_onFocus}
      onBlur={_onBlur}
    />
  );
};

export default Input;
