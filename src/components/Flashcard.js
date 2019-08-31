import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import {Button, Card} from './common';

class Flashcard extends Component {
  state = {
    cardValue: 0,
    sizeOfCardStack: this.props.navigation.state.params.length - 1
  };

   componentWillMount() {

     this.setState({
       cardValue: 0
     });

    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })

  this.frontInterpolate = this.animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  })

  this.backInterpolate = this.animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  })
}

  flipCard() {
    if (this.value >=90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }
  increment() {
    if (this.state.cardValue < this.state.sizeOfCardStack) {
      this.setState({
        cardValue: this.state.cardValue + 1
      });
    } else {
      this.setState({
        cardValue: 0
      });
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
    const { navigation: { state: { params } } } = this.props;
    const { cardValue } = this.state;

    const {
      textStyle,
      flipCard,
      flipCardBack,
      container0,
      container,
      container2
    } = styles;

    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    return (
      <View style={ container0 }>
        <View style={ container } >
          <TouchableOpacity onPress={() => this.flipCard()}>
            <Animated.View style={[ frontAnimatedStyle, flipCard ]}>
              <Text style={ textStyle }>
                {params[cardValue].Front}
              </Text>
            </Animated.View>
            <Animated.View style={[ backAnimatedStyle, flipCard, flipCardBack ]}>
              <Text style={ textStyle }>
                {params[cardValue].Back}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </View>

        <View style={container2}>
          <Button onPress={() => this.decrement()}>
            Previous
          </Button>
          <Button onPress={() => this.increment()}>
            Next
          </Button>
        </View>
        </View>

    );
  }
}

  const styles = {
    container0: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    container: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 3,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#012954',
      maxHeight: '50%',
    },
    container2: {
      flexDirection: 'row',
      flex: 2,
      maxHeight: '10%',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#012954',
    },
  flipCard: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    top: 0,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    color: '#012954',
    fontSize: 20,
    fontWeight: '600',
  },
};

export default Flashcard;
