import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Book = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default Book;
