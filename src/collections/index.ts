import firestore from '@react-native-firebase/firestore';
import {ChatRoom, User} from '../types';

const Collections = {
  Users: firestore().collection<User>('Users'),
  ChatRooms: firestore().collection<ChatRoom>('ChatRooms'),
};

export default Collections;
