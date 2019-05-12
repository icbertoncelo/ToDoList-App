import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Post from '~/components/Post';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
});

export default class App extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Post title="Estudy GoNative" />
        <Post title="Estudy React" />
      </View>
    );
  }
}
