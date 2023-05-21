import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import Components from '../../components';

const PROFILE_PIC =
  'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg';

export function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: PROFILE_PIC,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    console.log('Messages:', messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <Components.ThemedGiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
      }}
    />
  );
}
export default Chat;
