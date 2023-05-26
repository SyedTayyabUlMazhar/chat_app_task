import {PropsWithChildren} from 'react';
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

export type InputProps = Omit<TextInputProps, 'style'> & {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  Suffix?: () => React.JSX.Element;
  suffixContainerStyle?: StyleProp<ViewStyle>;
  Prefix?: () => React.JSX.Element;
  prefixContainerStyle?: StyleProp<ViewStyle>;
};

export type AffixProps = PropsWithChildren<{
  type: 'prefix' | 'suffix';
  style?: StyleProp<ViewStyle>;
  isInputFocused: boolean;
}>;
