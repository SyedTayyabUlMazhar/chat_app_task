import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';
import Components from '../../components';
import {SignUpFields} from './schema';
import styles from './styles';

const SignUp = () => {
  const form = useForm<SignUpFields>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignUpFields> = data => {
    console.log('onSubmit: ', data);
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
      <Components.Button
        title="Signup"
        style={styles.button}
        onPress={form.handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default SignUp;
