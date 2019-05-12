import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import Post from '~/components/Post';
import styles from './styles';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Estudy React Native',
        author: 'Ian Carlos',
        text: 'Estudy the first module',
      },
      {
        id: 2,
        title: 'Finish the challenge',
        author: 'Ian Carlos',
        text:
          'Finish the fist challenge. After that I ll able to complete the first module',
      },
      {
        id: 3,
        title: 'Send the email',
        author: 'Carlos Reis',
        text: 'Send the test to my teacher',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post
              key={post.id}
              data={post}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
