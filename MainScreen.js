
import React from 'react';
import { View, Text, TextInput, Switch, FlatList, StyleSheet } from 'react-native';
import SearchCustomHook from './SearchCustomHook';
import Book from './Book';

const MainScreen = () => {
  const { books, searchQuery } = SearchCustomHook();
  const [isRTL, setIsRTL] = React.useState(false);
  const [filteredBooks, setFilteredBooks] = React.useState([]);

  React.useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const toggleRTL = () => {
    setIsRTL((prevIsRTL) => !prevIsRTL);
  };

  const filterBooks = (text) => {
    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleSearch = (text) => {
    filterBooks(text);
  };

  return (
    <View style={isRTL ? styles.containerRTL : styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Book Reader</Text>
        <Switch value={isRTL} onValueChange={toggleRTL} />
      </View>
      <TextInput
        style={styles.searchInput}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search by book name..."
      />
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => <BookItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  containerRTL: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingTop: 50,
    direction: 'rtl',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  flatListContent: {
    flexGrow: 1,
  },
});

export default MainScreen;
