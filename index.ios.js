/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Loop, Stage,World } from 'react-game-kit/native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeGame extends Component {
  render() {
    return (
      <Loop>
        <Stage>
          <World>
          </World>
        </Stage>
      </Loop>
    );
  }
}

AppRegistry.registerComponent('ReactNativeGame', () => ReactNativeGame);
