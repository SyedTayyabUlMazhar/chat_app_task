import {GiftedChatProps as RNGiftedChatProps} from '../../../node_modules/react-native-gifted-chat/lib/GiftedChat.d';

export type GiftedChatProps = Omit<
  RNGiftedChatProps,
  'renderInputToolbar' | 'textInputProps' | 'renderBubble' | 'renderSend'
>;
