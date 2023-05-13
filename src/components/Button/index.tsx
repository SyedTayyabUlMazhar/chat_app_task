import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './types';
import styles from './styles';

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

  const _style = [
    styles.container,
    fillParent ? styles.containerFillParent : null,
    isLoading || disabled ? styles.containerDisabled : null,
    style,
  ];

  return (
    <TouchableOpacity style={_style} {...rest}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
