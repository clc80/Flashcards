import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import FlashcardMenuDetail from './FlashcardMenuDetail';
import Flashcards from '../Flashcards.json';
import { Header } from './common';

const flashcards = require('../Flashcards.json');

class FlashcardMenu extends Component {
  state = {
    flashcards: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    this.setState({
      flashcards: Flashcards,
      loading: false,
      error: false,
    });
  }

  renderFlashCard() {
    const {navigation: { navigate } } = this.props;

    return this.state.flashcards.map(flashcard =>
        <FlashcardMenuDetail
          key={flashcard.title}
          flashcard={flashcard}
          title={flashcard.title}
          onPress={() => navigate('Flashcard', flashcard.CardStack )}
        />
    );

  }

  render() {
    return (
      <View>
        <Header headerText='ERJ 175' />
        <ScrollView>
            {this.renderFlashCard()}
        </ScrollView>
      </View>

    )
  }
}

export default FlashcardMenu;
