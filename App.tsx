//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TaskeOne from './src/TaskOne';
import TaskTwo from './src/TaskTwo';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <TaskTwo />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
