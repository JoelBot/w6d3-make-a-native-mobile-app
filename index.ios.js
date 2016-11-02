/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import UselessTextInput from './components/TextInput';

export default class w6d3MakeANativeMovileApp extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { text: 'something'}
  // }
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.welcome, {backgroundColor: 'powderblue'}}>
        Welcome to React Native!
      </Text>
       </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.instructions, {backgroundColor: 'skyblue'}}>
        To get started, edit index.ios.js
      </Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.instructions, {backgroundColor: 'steelblue'}}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
      </View>
        {/* <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      {this.props.children} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('w6d3MakeANativeMovileApp', () => w6d3MakeANativeMovileApp);
