import {ReactNativeFirebase} from '@react-native-firebase/app';
import MessageUtil from './MessageUtil';

class FirebaseUtil {
  static getFormattedError(e: ReactNativeFirebase.NativeFirebaseError) {
    // [auth/no-current-user] No user currently signed in.
    let message = e?.message;
    const code = e?.code;
    const regularExpression = new RegExp('^(\\[.+\\])\\s+(.+)$');

    // fullMatch: [auth/no-current-user] No user currently signed in.
    // group1: [auth/no-current-user]
    // group2: No user currently signed in.
    const [_, __, group2] = regularExpression.exec(message) ?? [];

    message = group2;

    const formattedError = {error: {code, message}};
    console.log(e);
    MessageUtil.showError(message);

    return formattedError;
  }
}

export default FirebaseUtil;
