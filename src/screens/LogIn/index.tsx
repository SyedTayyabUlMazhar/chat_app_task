import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';
import Components from '../../components';
import useThunkAction from '../../hooks/useThunkAction';
import Routes from '../../navigator/routes';
import Actions from '../../redux/actions';
import {AuthStackScreenProps} from '../../types';
import {LogInFields, LogInSchema} from './schema';
import styles from './styles';

const LogIn = (props: AuthStackScreenProps<typeof Routes.LogIn>) => {
  const {navigation} = props;

  const form = useForm<LogInFields>({
    mode: 'onChange',
    resolver: yupResolver(LogInSchema),
    defaultValues: __DEV__
      ? {email: 'johndoe@getnada.com', password: 'Code@123'}
      : undefined,
  });

  const loginAction = useThunkAction(Actions.User.Thunk.signInRequest);

  const onSubmit: SubmitHandler<LogInFields> = data => {
    console.log('onSubmit: ', data);
    loginAction.dispatch(data.email, data.password);
  };

  const goToSignUpScreen = () => navigation.navigate('SignUp');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
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
          title="Login"
          style={styles.button}
          onPress={form.handleSubmit(onSubmit)}
          isLoading={loginAction.isLoading}
        />
      </View>
      <Components.Text.TextOnSecondary style={styles.dontHaveAnAccountText}>
        Don't have an account?{' '}
        <Components.Text.Primary onPress={goToSignUpScreen}>
          Signup
        </Components.Text.Primary>
      </Components.Text.TextOnSecondary>
    </View>
  );
};

export default LogIn;
