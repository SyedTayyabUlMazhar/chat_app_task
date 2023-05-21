import {ThemeType} from './types';

const Base = {
  disabled: '#BDBDBD',
  error: 'red',
};

const Light: ThemeType = {
  ...Base,
  primary: '#D81B60',
  background: '#ffffff',
  primaryText: '#fff',
  secondaryText: '#000',
  chat: {
    sentMessageBackground: '#D81B60',
    sentMessageText: 'white',
    receivedMessageBackground: '#F0F0F0',
    receivedMessageText: 'black',
  },
};

const Dark: ThemeType = {
  ...Base,
  primary: '#c72e66',
  background: '#121212',
  primaryText: '#fff',
  secondaryText: '#fff',
  chat: {
    sentMessageBackground: '#c72e66',
    sentMessageText: 'white',
    receivedMessageBackground: '#303030',
    receivedMessageText: 'white',
  },
};

const Theme = {
  Light,
  Dark,
};

export default Theme;
