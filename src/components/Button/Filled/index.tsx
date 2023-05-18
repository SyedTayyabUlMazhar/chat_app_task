import React from 'react';
import useTheme from '../../..//hooks/useTheme';
import BaseButton from '../BaseButton';
import {FilledButtonProps} from '../types';
import styles from './styles';

const Filled = (props: FilledButtonProps) => {
  const theme = useTheme();

  const {isLoading, disabled, style, titleStyle, ...rest} = props;

  const _style = [
    styles.containerShadow,
    {backgroundColor: theme.primary},
    isLoading || disabled ? {backgroundColor: theme.disabled} : null,
    style,
  ];

  const _titleStyle = [{color: theme.primaryText}, titleStyle];

  return (
    <BaseButton
      {...{...rest, isLoading, disabled}}
      loaderColor="white"
      style={_style}
      titleStyle={_titleStyle}
    />
  );
};

export default Filled;
