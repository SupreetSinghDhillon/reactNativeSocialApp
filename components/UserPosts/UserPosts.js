import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faArrowAltCircleDown,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

const UserPosts = props => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <UserProfileImage profileImage={props.profileImage} />
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <Text>
            {props.firstName} {props.lastName}
          </Text>
          <Text>{props.location}</Text>
        </View>
      </View>
      <View style={{margin: 10}}>
        <Image style={{width: '100%', height: 300}} source={props.image} />
      </View>
      <View style={{margin: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon icon={faHeart} />
            <Text> {props.likes}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon icon={faMessage} />
            <Text> {props.comments}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
            <Text> {props.bookmarks}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

UserPosts.propTypes = {
  firstName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.string,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  profileImage: PropTypes.any.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPosts;
