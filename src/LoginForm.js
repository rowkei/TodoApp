import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TextInput, FlatList, Button, } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {

  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <TextInput
            placeholder="user@gmail.com" 
            style={styles.inputStyle}
          />
          <TextInput
            placeholder="password" 
            style={styles.inputStyle}
          />
          <Button
      	    title="ログイン"
      	    onPress={() => thizs.props.navigation.navigate('Details')}
      	  />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 30,
    borderWidth: 1,
    borderColor: '#333'
  },
});
