import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

export type InputProps = Omit<TextInputProps, 'style'> & {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
};
