import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseButton from '../BaseButton';
import {OutlinedButtonProps} from '../types';
import styles from './styles';

const Outlined = (props: OutlinedButtonProps) => {
  const theme = useTheme();

  const {isLoading, disabled, style, titleStyle, ...rest} = props;

  const _style: OutlinedButtonProps['style'] = [
    styles.containerBorder,
    {borderColor: isLoading || disabled ? theme.disabled : theme.primary},
    style,
  ];

  const _titleStyle = [
    {color: isLoading || disabled ? theme.disabled : theme.primary},
    titleStyle,
  ];

  return (
    <BaseButton
      {...{...rest, isLoading, disabled}}
      loaderColor={theme.disabled}
      style={_style}
      titleStyle={_titleStyle}
    />
  );
};

export default Outlined;
