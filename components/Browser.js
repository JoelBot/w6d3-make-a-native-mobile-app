import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://reddit.com/r/corgi'}}
        style={{marginTop: 20}}
      />
    );
  }
}
