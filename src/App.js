import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AppNavigator from './routes';
import FlashcardMenu from './components/FlashcardMenu';

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
