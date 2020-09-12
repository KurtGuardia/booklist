import Navbar from './components/components/Navbar';
import BookContextProvider from './contexts/BookContext';
import './App.css';
function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
