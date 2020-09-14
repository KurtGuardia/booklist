import Navbar from './components/components/Navbar';
import BookContextProvider from './contexts/BookContext';
import './App.css';
import BookList from './components/components/BookList';
import BookForm from './components/components/BookForm';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
