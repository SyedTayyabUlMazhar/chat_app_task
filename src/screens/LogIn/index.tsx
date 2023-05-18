import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';
import Components from '../../components';
import {LogInFields, LogInSchema} from './schema';
import styles from './styles';
import useDispatch from '../../hooks/useDispatch';
import Actions from '../../redux/actions';

const LogIn = () => {
  const form = useForm<LogInFields>({
    mode: 'onChange',
    resolver: yupResolver(LogInSchema),
    defaultValues: __DEV__
      ? {email: 'johndoe@getnada.com', password: 'Code@123'}
      : undefined,
  });

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<LogInFields> = async data => {
    console.log('onSubmit: ', data);
    setIsLoading(true);
    await dispatch(Actions.User.Thunk.signInRequest(data.email, data.password));
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
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
        isLoading={isLoading}
      />
    </View>
  );
};

export default LogIn;
