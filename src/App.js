import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Book from './components/Book';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Book />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Bookstore</h1>
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
