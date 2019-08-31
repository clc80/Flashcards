//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a registerComponent
const Header  = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//Styling
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    //aligns items up and down
    justifyContent: 'center',
    //aligns items left to right
    alignItems: 'center',
    height: 75,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

//Make the component available to other parts of the app
export { Header };
