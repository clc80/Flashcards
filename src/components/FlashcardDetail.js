import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common';

class FlashcardDetail extends Component {

  increment() {
    if (this.props.cardValue < this.props.sizeOfCardStack) {
        this.props.cardValue = cardValue + 1
    } else {
        this.props.cardValue = 0
    }
  }
  decrement() {
    if (this.state.cardValue === 0) {
      this.setState({
        cardValue: this.state.sizeOfCardStack
      });
    } else {
      this.setState({
        cardValue: this.state.cardValue - 1
      });
    }
  }

  render() {
    const { cardValue, sizeOfCardStack } = this.props;
    const { container } = styles;

    return (
      <View style={container}>
        <Button onPress={() => this.decrement()}>
          Previous
        </Button>
        <Button onPress={() => this.increment()}>
          Next
        </Button>
      </View>
    );
  }
}
const styles = {
  container: {
    flexDirection: 'row',
    flex: 2,
    maxHeight: '10%',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#012954',
  },
}
export default FlashcardDetail;
