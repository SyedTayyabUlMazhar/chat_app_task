import {StyleProp} from 'react-native';
import {TextStyle, TouchableOpacityProps} from 'react-native/types';

export type FilledButtonProps = TouchableOpacityProps & {
  title: string;
  fillParent?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isLoading?: boolean;
};

export type BaseButtonProps = TouchableOpacityProps & {
  title: string;
  fillParent?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isLoading?: boolean;
};
