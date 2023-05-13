import {ThemeType} from './types';

const Base = {
  disabled: '#BDBDBD',
};

const Light: ThemeType = {
  ...Base,
  primary: '#D81B60',
  background: '#ffffff',
  primaryText: '#fff',
  secondaryText: '#000',
};

const Dark: ThemeType = {
  ...Base,
  primary: '#c72e66',
  background: '#121212',
  primaryText: '#fff',
  secondaryText: '#fff',
};

const Theme = {
  Light,
  Dark,
};

export default Theme;
