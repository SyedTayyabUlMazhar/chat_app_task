import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import useTheme from '../../../hooks/useTheme';

const ListEmptyComponent = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="message-bulleted-off"
        color={theme.disabled}
        size={80}
      />
      <Text style={[styles.text, {color: theme.disabled}]}>
        No Conversations
      </Text>
    </View>
  );
};

export default ListEmptyComponent;
