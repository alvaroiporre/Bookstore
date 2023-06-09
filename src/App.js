import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
