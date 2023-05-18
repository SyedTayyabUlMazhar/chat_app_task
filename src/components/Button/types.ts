import {StyleProp} from 'react-native';
import {TextStyle, TouchableOpacityProps} from 'react-native/types';

export type FilledButtonProps = Omit<BaseButtonProps, 'loaderColor'>;
export type OutlinedButtonProps = Omit<BaseButtonProps, 'loaderColor'>;
export type TextButtonProps = Omit<BaseButtonProps, 'loaderColor'>;

export type BaseButtonProps = TouchableOpacityProps & {
  title: string;
  fillParent?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isLoading?: boolean;
  loaderColor: string;
};
