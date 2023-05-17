import {Alert} from 'react-native';

class MessageUtil {
  static showError(message: string) {
    Alert.alert(message);
  }
}

export default MessageUtil;
