/*
Programming with Mash
https://www.youtube.com/channel/UCkqNCi8euqXHHMk3XQ4luKw
*/
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Platform } from 'react-native';

export default class App extends Component {

  constructor() {
    super();

    let strlist = [
      'Paris',
      'Madrid',
      'Berlin',
      'London',
      'Rio',
      'Delhi',
      'Rome',
      'Moscow',
    ];

    this.state = {
      title: 'Debugging Test',
      strlist: strlist,
      parameter: '',
    };

    this.onClickChangeBackground = this.onClickChangeBackground.bind(this);
  }


  onClickChangeBackground() {
    const random = Math.floor(Math.random() * this.state.strlist.length);
    console.log('clicked!')
    this.setState({parameter: this.state.strlist[random]});
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text
          style={styles.textify}
        >
          {this.state.title}
        </Text>
        <Button
          title='Click Here'
          color='gray'
          onPress={this.onClickChangeBackground}
        />
        <Text
          style={styles.textify}
        >
          {this.state.parameter}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan'
  },
  textify: {
    fontSize: 40,
    color: 'black',
    margin: 20,
    fontFamily: Platform.OS == 'android' ? 'cursive' : 'helvetica',
  },
});