import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import useTheme from '../../hooks/useTheme';
import Affix from './Affix';
import styles from './styles';
import {InputProps} from './types';

const Input = (props: InputProps) => {
  const {
    style,
    onFocus,
    onBlur,
    errorMessage,
    inputStyle,
    errorStyle,
    Suffix,
    suffixContainerStyle,
    Prefix,
    prefixContainerStyle,
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
    <View style={style}>
      <View style={styles.inputAndAffixContainer}>
        {Prefix ? (
          <Affix
            isInputFocused={isFocused}
            type="prefix"
            style={prefixContainerStyle}>
            <Prefix />
          </Affix>
        ) : null}
        <TextInput
          style={[
            styles.input,
            styles.defaultBorder,
            isFocused ? {borderColor: theme.primary} : null,
            Suffix ? styles.noEndBorder : null,
            Prefix ? styles.noStartBorder : null,
            {color: theme.secondaryText},
            inputStyle,
          ]}
          {...rest}
          onFocus={_onFocus}
          onBlur={_onBlur}
        />
        {Suffix ? (
          <Affix
            isInputFocused={isFocused}
            type="suffix"
            style={suffixContainerStyle}>
            <Suffix />
          </Affix>
        ) : null}
      </View>
      {errorMessage ? (
        <Text style={[styles.errorText, {color: theme.error}, errorStyle]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;
