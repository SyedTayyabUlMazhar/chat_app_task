import {TextStyle, TouchableOpacityProps} from 'react-native/types';

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  fillParent?: boolean;
  titleStyle?: TextStyle;
  disabled?: boolean;
  isLoading?: boolean;
};
