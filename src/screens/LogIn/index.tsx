import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';
import Components from '../../components';
import {LogInFields, LogInSchema} from './schema';
import styles from './styles';

const LogIn = () => {
  const form = useForm<LogInFields>({
    mode: 'onChange',
    resolver: yupResolver(LogInSchema),
    defaultValues: __DEV__
      ? {email: 'johndoe@getnada.com', password: 'Code@123'}
      : undefined,
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<LogInFields> = async data => {
    console.log('onSubmit: ', data);
    setIsLoading(true);
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
      <Components.Button
        title="Login"
        style={styles.button}
        onPress={form.handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </View>
  );
};

export default LogIn;
