import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  storyContainer: {
    margin: horizontalScale(10),
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  firstName: {
    textAlign: 'center',
    marginTop: 5,
    color: 'blue',
  },
});

export default style;
