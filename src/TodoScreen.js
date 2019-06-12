import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, ScrollView, FlatList, Button, } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {index: 1, title: "原稿を書く", done: false},
        {index: 2, title: "散歩", done: false},
      ],
      cureentIndex: 2
    }
  }

  onAddTask = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView styles={styles.todolist}>
          <FlatList data={this.state.todo}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => "todo_" + item.index}
          />
        </ScrollView>
        <View>
          <Button
            onPress={this.onAddTask}
            title="新規登録"
            style={styles.inputBUtton}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
  },
  todolist: {
    flex: 1
  },
  inputBUtton: {
    width: 100,
  },
});
