import * as yup from 'yup';

export const LogInSchema = yup.object().shape({
  name: yup.string().label('Name').required().min(3).max(30),

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
