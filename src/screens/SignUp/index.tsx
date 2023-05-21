import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';
import Components from '../../components';
import useThunkAction from '../../hooks/useThunkAction';
import Actions from '../../redux/actions';
import {SignUpFields, SignUpSchema} from './schema';
import styles from './styles';

const SignUp = () => {
  const form = useForm<SignUpFields>({
    mode: 'onChange',
    resolver: yupResolver(SignUpSchema),
    defaultValues: __DEV__
      ? {email: 'johndoe@getnada.com', name: 'John Doe', password: 'Code@123'}
      : undefined,
  });

  const signUpAction = useThunkAction(Actions.User.Thunk.signUpRequest);

  const onSubmit: SubmitHandler<SignUpFields> = async data => {
    console.log('onSubmit: ', data);
    signUpAction.dispatch(data.email, data.password, data.name);
  };

  return (
    <View style={styles.container}>
      <Components.FormInput
        control={form.control}
        name="name"
        placeholder="Name"
        style={styles.input}
      />
      <Components.FormInput
        control={form.control}
        name="email"
        keyboardType="email-address"
        placeholder="Email"
        style={styles.input}
      />
      <Components.FormInput
        control={form.control}
        name="password"
        secureTextEntry
        placeholder="Password"
        style={styles.input}
      />
      <Components.Button.Filled
        title="Signup"
        style={styles.button}
        onPress={form.handleSubmit(onSubmit)}
        isLoading={signUpAction.isLoading}
      />
    </View>
  );
};

export default SignUp;
