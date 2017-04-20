import React, {Component} from 'react';
import {
  AppRegistry
} from 'react-vr';
import Hello from './components/hello';

export default class WelcomeToVR extends Component {
  render() {
    return (
      <Hello />
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
