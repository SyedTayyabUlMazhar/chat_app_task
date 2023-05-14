import React from 'react';
import {FieldValues, useController} from 'react-hook-form';
import {FormInputProps} from './types';
import Components from '..';

const FormInput = <TFieldValues extends FieldValues>(
  props: FormInputProps<TFieldValues>,
) => {
  const {control, name, ...rest} = props;

  const {
    field: {onChange, value},
    fieldState: {error},
  } = useController({
    name,
    control,
    shouldUnregister: true,
  });

  return (
    <Components.Input
      value={value}
      onChangeText={onChange}
      errorMessage={error?.message}
      {...rest}
    />
  );
};

export default FormInput;
