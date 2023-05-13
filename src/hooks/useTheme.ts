import {useColorScheme} from 'react-native';
import Theme from '../theme/colors';

const useTheme = () => {
  const isLightMode = useColorScheme();

  return isLightMode ? Theme.Light : Theme.Dark;
};

export default useTheme;
