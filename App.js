import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Switch,
  Dimensions,
  Platform,
} from 'react-native'; // Add import statement for Text
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyles from './assets/styles/globalStyles';
import UserStory from './components/UserStory/UserStory';
import UserPosts from './components/UserPosts/UserPosts';

const App = () => {
  const userStories = [
    {
      firstName: 'Ranvijay',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Balbir',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Abrar',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Aziz',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Royal',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Manjot',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Mishra',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jija Ji',
      id: 8,
      profileImage: {
        uri: 'https://m.media-amazon.com/images/M/MV5BNjY0MmJmZjEtZmMyZi00OTBmLWJhMDItNjBiYWRlYWQ5MzgxXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg',
      },
    },
    {
      firstName: 'Supreet',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      id: 1,
      firstName: 'Ranvijay',
      lastName: 'Singh',
      likes: 100,
      profileImage: require('./assets/images/default_profile.png'),
      comments: 50,
      bookmarks: 10,
      image: require('./assets/images/default_post.png'),
      location: 'New York',
    },
    {
      id: 2,
      firstName: 'Balbir',
      lastName: 'Singh',
      likes: 200,
      bookmarks: 10,
      profileImage: require('./assets/images/default_profile.png'),
      comments: 100,
      image: require('./assets/images/default_post.png'),
      location: 'London',
    },
    {
      id: 3,
      firstName: 'Abrar',
      lastName: 'Singh',
      likes: 300,
      bookmarks: 10,
      profileImage: require('./assets/images/default_profile.png'),
      comments: 150,
      image: require('./assets/images/default_post.png'),
      location: 'Paris',
    },
    {
      id: 4,
      firstName: 'Aziz',
      lastName: 'Singh',
      likes: 400,
      profileImage: require('./assets/images/default_profile.png'),
      comments: 200,
      bookmarks: 10,
      image: require('./assets/images/default_post.png'),
      location: 'Tokyo',
    },
    {
      id: 5,
      firstName: 'Royal',
      lastName: 'Singh',
      likes: 500,
      profileImage: require('./assets/images/default_profile.png'),
      comments: 250,
      image: require('./assets/images/default_post.png'),
      bookmarks: 10,
      location: 'Sydney',
    },
    {
      id: 6,
      firstName: 'Manjot',
      lastName: 'Singh',
      likes: 600,
      profileImage: require('./assets/images/default_profile.png'),
      comments: 300,
      bookmarks: 10,
      image: require('./assets/images/default_post.png'),
      location: 'Dubai',
    },
    {
      id: 7,
      firstName: 'Mishra',
      lastName: 'Singh',
      likes: 700,
      comments: 350,
      profileImage: require('./assets/images/default_profile.png'),
      bookmarks: 10,
      image: require('./assets/images/default_post.png'),
      location: 'Mumbai',
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  console.log('screenData', screenData);

  Dimensions.addEventListener('change', result => {
    setScreenData(result.screen);
  });
  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(
      userStories,
      userStoriesCurrentPage,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(
      userPosts,
      userPostsCurrentPage,
      userPostsPageSize,
    );
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  console.log(Platform);
  const pagination = (database, currentPage, pageSize) => {
    console.log('currentPage', currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) return [];
    return database.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyles.header}>
                <Title title="Animal" />
                <TouchableOpacity style={globalStyles.messageIcon}>
                  <FontAwesomeIcon icon={faEnvelope} size={30} color="red" />
                  <View style={globalStyles.messageNumberContainer}>
                    <Text style={globalStyles.messageNumberText}>10</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Switch
                  style={
                    Platform.OS === 'android' && {
                      transform: [{scaleX: 2}, {scaleY: 2}],
                    }
                  }
                />
              </View>
              <View style={globalStyles.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    console.log('End of the list reached');
                    if (isLoadingUserStories) return;
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          data={userPosts}
          renderItem={({item}) => (
            <View style={globalStyles.userPostsContainer}>
              <UserPosts
                key={'userPost' + item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                likes={item.likes}
                profileImage={item.profileImage}
                comments={item.comments}
                bookmarks={item.bookmarks}
                image={item.image}
                location={item.location}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
