import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './types';
import styles from './styles';
import useTheme from '../../hooks/useTheme';

const Button = (props: ButtonProps) => {
  const {
    title,
    fillParent = true,
    style,
    titleStyle,
    disabled,
    isLoading,
    ...rest
  } = props;

  const theme = useTheme();

  const _style = [
    styles.container,
    {backgroundColor: theme.primary},
    fillParent ? styles.containerFillParent : null,
    isLoading || disabled ? {backgroundColor: theme.disabled} : null,
    style,
  ];

  return (
    <TouchableOpacity style={_style} {...rest}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.title, titleStyle, {color: theme.primaryText}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
