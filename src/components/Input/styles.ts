import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  input: {
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 16,
    borderColor: 'grey',
    borderRadius: 4,
    fontSize: 15,
  },

  focused: {
    borderWidth: 1,
  },

  errorText: {
    marginTop: 8,
  },
});
