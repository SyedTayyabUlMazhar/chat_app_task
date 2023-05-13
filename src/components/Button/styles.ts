import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#D81B60',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 4,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignSelf: 'center',
    height: 54,
  },

  containerFillParent: {
    alignSelf: 'stretch',
  },

  containerDisabled: {
    backgroundColor: '#BDBDBD',
  },

  title: {fontSize: 18, color: 'white', fontWeight: '500'},
});
