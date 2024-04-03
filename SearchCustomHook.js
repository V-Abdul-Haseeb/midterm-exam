import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://dev.iqrakitab.net/api/books';

const SearchCustomHook = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [searchQuery, books]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.success) {
        setBooks(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const filterBooks = () => {
    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setBooks(filtered);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return { books, searchQuery, handleSearch };
};

export default SearchCustomHook;
