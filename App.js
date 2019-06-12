import React from 'react';
import TodoScreen from './src/TodoScreen';
import LoginForm from './src/LoginForm';
import {createAppContainer, createStackNavigator} from 'react-navigation';


const AppNavigator = createStackNavigator({
  Home: LoginForm,
  Details: TodoScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
    )
  }
  
}

