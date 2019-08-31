import { StackNavigator, AppNavigator } from 'react-navigation';
import FlashcardMenu from '../src/components/FlashcardMenu.js';
import Flashcard from '../src/components/Flashcard';

export default StackNavigator({
  FlashcardMenu: {
    screen: FlashcardMenu,
  },
  Flashcard: {
    screen: Flashcard,
  },
});
