import React from 'react';
import {View} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';
import styles from './styles';
import {GiftedChatProps} from './types';

export function ThemedGiftedChat(props: GiftedChatProps) {
  const theme = useTheme();

  return (
    <GiftedChat
      renderInputToolbar={toolBarProps => (
        <InputToolbar
          containerStyle={{
            backgroundColor: theme.background,
          }}
          {...toolBarProps}
        />
      )}
      textInputProps={{color: theme.secondaryText}}
      renderBubble={bubbleProps => {
        return (
          <Bubble
            {...bubbleProps}
            textStyle={{
              right: {color: theme.chat.sentMessageText},
              left: {color: theme.chat.receivedMessageText},
            }}
            wrapperStyle={{
              right: {backgroundColor: theme.chat.sentMessageBackground},
              left: {backgroundColor: theme.chat.receivedMessageBackground},
            }}
          />
        );
      }}
      renderSend={sendProps => {
        return (
          <Send {...sendProps}>
            <View style={styles.sendButtonContainer}>
              <MaterialCommunityIcons
                name="send-circle"
                size={32}
                color={theme.primary}
              />
            </View>
          </Send>
        );
      }}
      {...props}
    />
  );
}
export default ThemedGiftedChat;
