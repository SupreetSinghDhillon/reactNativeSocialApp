import React from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style'; // Add import statement for style
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = userStory => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={userStory.profileImage} />
      <Text style={style.firstName}>{userStory.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.number.isRequired,
};

export default UserStory;
