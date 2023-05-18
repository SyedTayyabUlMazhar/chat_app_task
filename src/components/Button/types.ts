import {StyleProp} from 'react-native';
import {TextStyle, TouchableOpacityProps} from 'react-native/types';
import Text from '../Text';

export type FilledButtonProps = Omit<BaseButtonProps, 'loaderColor'>;
export type OutlinedButtonProps = Omit<BaseButtonProps, 'loaderColor'>;
export type TextButtonProps = TouchableOpacityProps & {
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  loaderColor?: string;
  TextComponent:
    | typeof Text.Primary
    | typeof Text.TextOnPrimary
    | typeof Text.TextOnSecondary;
};

export type BaseButtonProps = TouchableOpacityProps & {
  title: string;
  fillParent?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isLoading?: boolean;
  loaderColor: string;
};
