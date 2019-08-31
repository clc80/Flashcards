import React, { Component } from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Card, CardItem, Button } from './common';

export default function FlashcardMenuDetail({ title, onPress }) {
  return (
    <Card>
      <CardItem>
          <Button onPress={onPress}>
            { title }
          </Button>
      </CardItem>
    </Card>
  );
}
