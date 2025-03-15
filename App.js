import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {

  let data = [
    {
      key: "1",
      description: "Title",
      completed: false,
    },
    {
      key: "2",
      description: "Title2",
      completed: false,
    }
  ]

  let renderItem = ({ item }) => {
    return <Text>{item.description}</Text>
  }
  return (<SafeAreaView style={styles.container}>
    <FlatList data={data} renderItem={renderItem}></FlatList>
  </SafeAreaView>)
}