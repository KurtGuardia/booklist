import Navbar from './components/components/Navbar';
import BookContextProvider from './contexts/BookContext';
import './App.css';
import BookList from './components/components/BookList';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
