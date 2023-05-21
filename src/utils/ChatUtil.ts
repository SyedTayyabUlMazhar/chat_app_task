import {IMessage} from 'react-native-gifted-chat';
import {ChatMessage} from '../types';

class ChatUtil {
  static chatMessageFromIMessage(iMessage: IMessage, receiverId: string) {
    const message: ChatMessage = {
      uid: iMessage._id as string,
      senderId: iMessage.user._id as string,
      receiverId: receiverId,
      content: iMessage.text,
      timestamp: new Date(),
    };
    return message;
  }
}

export default ChatUtil;
