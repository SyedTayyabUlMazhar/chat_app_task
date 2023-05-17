import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  name: yup.string().label('Name').required().min(3).max(30),

  email: yup.string().label('Email').email().required(),

  password: yup
    .string()
    .label('Password')

    .required()
    .min(8)
    .max(16),
});

export type SignUpFields = {
  name: string;
  email: string;
  password: string;
};
