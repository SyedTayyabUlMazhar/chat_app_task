import 'react-native-gesture-handler';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import useTheme from './src/hooks/useTheme';
import Components from './src/components';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import Actions from './src/redux/actions';
import useDispatch from './src/hooks/useDispatch';

function Root(): JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App(): JSX.Element {
  const theme = useTheme();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    const result = await dispatch(
      Actions.User.signInRequest('johndoe@getnada.com', 'Code@123'),
    );
    console.log('login: ', result);
    setIsLoading(false);
  };
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.background,
        },
        styles.root,
      ]}>
      <View style={styles.container}>
        <Components.Button
          title="Login"
          onPress={login}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1},
  container: {flex: 1, justifyContent: 'center', paddingHorizontal: 16},
});

export default Root;
