import firestore from '@react-native-firebase/firestore';
import {User} from '../types';

const Collections = {
  Users: firestore().collection<User>('Users'),
};

export default Collections;
