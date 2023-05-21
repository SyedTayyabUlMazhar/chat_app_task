import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},

  contentContainer: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  itemImage: {
    height: undefined,
    width: 56,
    aspectRatio: 1,
    borderRadius: 100,
    marginEnd: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 2,
  },
});
