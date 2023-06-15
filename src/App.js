import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BooksList />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
