import {StyleProp} from 'react-native';
import {TextStyle, TouchableOpacityProps} from 'react-native/types';

export type FilledButtonProps = BaseButtonProps;

export type BaseButtonProps = TouchableOpacityProps & {
  title: string;
  fillParent?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isLoading?: boolean;
};
