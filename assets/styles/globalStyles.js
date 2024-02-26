import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  header: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {padding: 15, backgroundColor: 'yellow', borderRadius: 50},
  messageNumberContainer: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -1,
    right: -1,
  },
  messageNumberText: {color: 'white', fontWeight: 'bold'},
  userStoryContainer: {
    margin: 10,
    flexDirection: 'row',
  },
});

export default globalStyles;
