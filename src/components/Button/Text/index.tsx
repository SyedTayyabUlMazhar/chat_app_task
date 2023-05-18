import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {TextButtonProps} from '../types';
import styles from './styles';
import useTheme from '../../../hooks/useTheme';

const Text = (props: TextButtonProps) => {
  const theme = useTheme();
  const {
    style,
    isLoading,
    disabled,
    TextComponent,
    title,
    loaderColor = theme.disabled,
    ...rest
  } = props;

  const _disabled = isLoading || disabled;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={_disabled}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} />
      ) : (
        <TextComponent style={_disabled ? styles.disabledOpacity : null}>
          {title}
        </TextComponent>
      )}
    </TouchableOpacity>
  );
};

export default Text;
