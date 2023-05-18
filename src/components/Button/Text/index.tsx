import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseButton from '../BaseButton';
import {TextButtonProps} from '../types';

const Text = (props: TextButtonProps) => {
  const theme = useTheme();

  const {isLoading, disabled, style, titleStyle, ...rest} = props;

  const _style: TextButtonProps['style'] = [
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

export default Text;
