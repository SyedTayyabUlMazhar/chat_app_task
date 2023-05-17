import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import MyApp from './src';
import useTheme from './src/hooks/useTheme';
import {store} from './src/redux';

function App(): JSX.Element {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <SafeAreaView
        style={[
          {
            backgroundColor: theme.background,
          },
          styles.container,
        ]}>
        <MyApp />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
