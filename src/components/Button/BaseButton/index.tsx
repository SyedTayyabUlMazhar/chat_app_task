import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {BaseButtonProps} from '../types';
import styles from './styles';

const BaseButton = (props: BaseButtonProps) => {
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
    style,
  ];

  return (
    <TouchableOpacity style={_style} {...rest} disabled={isLoading || disabled}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default BaseButton;
