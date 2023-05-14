import {Control, FieldPath, FieldValues} from 'react-hook-form';
import {InputProps} from '../types';

export type FormInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<InputProps, 'value' | 'onChangeText' | 'errorMessage'> & {
  name: TName;
  control: Control<TFieldValues>;
};
