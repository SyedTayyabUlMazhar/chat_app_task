import {useColorScheme} from 'react-native';
import Theme from '../theme/colors';

const useTheme = () => {
  const colorScheme = useColorScheme();

  return colorScheme === 'light' ? Theme.Light : Theme.Dark;
};

export default useTheme;
