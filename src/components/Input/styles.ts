import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  inputAndAffixContainer: {
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    fontSize: 15,
  },

  errorText: {
    marginTop: 8,
  },

  defaultBorder: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  noEndBorder: {
    borderEndWidth: 0,
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0,
  },

  noStartBorder: {
    borderStartWidth: 0,
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
  },
});
