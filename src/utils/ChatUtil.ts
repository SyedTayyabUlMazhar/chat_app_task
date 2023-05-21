import {IMessage} from 'react-native-gifted-chat';
import {ChatMessage, User} from '../types';

class ChatUtil {
  static chatMessageFromIMessage(iMessage: IMessage, receiverId: string) {
    const message: ChatMessage = {
      uid: iMessage._id as string,
      senderId: iMessage.user._id as string,
      receiverId: receiverId,
      content: iMessage.text,
      timestamp: new Date().getTime(),
    };
    return message;
  }

  static iMessageFromChatMessage(message: ChatMessage, users: User[]) {
    const iMessage: IMessage = {
      _id: message.uid,
      text: message.content,
      createdAt: message.timestamp,
      user: {
        _id: message.senderId,
        name: users.find(({uid}) => message.senderId === uid)?.name,
      },
    };

    return iMessage;
  }
}

export default ChatUtil;
