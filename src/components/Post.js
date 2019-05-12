import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Post = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Post;
