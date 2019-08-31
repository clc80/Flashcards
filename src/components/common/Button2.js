import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button2 extends Component {
  render(){
    const { onPress, children } = this.props;
    const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity onPress={ onPress } style={ buttonStyle }>
        <Text style={ textStyle }>
          { children }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#012954',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#012954',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export { Button2 };
