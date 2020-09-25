import React from 'react';
import { BookContext } from '../../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = React.useContext(BookContext);
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Book title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder="Book's author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type='submit' value='add book' />
    </form>
  );
};

export default BookForm;
