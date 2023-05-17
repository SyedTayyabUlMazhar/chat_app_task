import * as yup from 'yup';

export const LogInSchema = yup.object().shape({
  email: yup.string().label('Email').email().required(),

  password: yup
    .string()
    .label('Password')

    .required()
    .min(8)
    .max(16),
});

export type LogInFields = {
  email: string;
  password: string;
};
