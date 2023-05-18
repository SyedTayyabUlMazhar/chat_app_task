import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 4,

    alignItems: 'center',

    elevation: 5,
    alignSelf: 'center',
    height: 58,
  },

  containerFillParent: {
    alignSelf: 'stretch',
  },

  title: {fontSize: 18, fontWeight: '500'},
});
