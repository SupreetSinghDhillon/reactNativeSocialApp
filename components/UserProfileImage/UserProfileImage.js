import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';

const UserProfileImage = ({profileImage}) => {
  return (
    <View style={{borderColor: 'black', borderWidth: 8, borderRadius: 50}}>
      <Image
        style={{width: 70, height: 70, borderRadius: 100}}
        source={{
          uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCRaJEebNeBgaqn--Va2oOqz7YuJop2Za2jPEs6iGfMKGNRtXr',
        }}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }),
  ]),
};

export default UserProfileImage;
