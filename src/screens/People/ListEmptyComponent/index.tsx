import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import useTheme from '../../../hooks/useTheme';

const ListEmptyComponent = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <FontAwesome5Icon name="users" color={theme.disabled} size={80} />
      <Text style={[styles.text, {color: theme.disabled}]}>No users</Text>
    </View>
  );
};

export default ListEmptyComponent;
