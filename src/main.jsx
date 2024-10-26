import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Підключаємо глобальні стилі
import './style.scss';

// Маршрутизація
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Contact } from './pages/Contact/Contact.jsx';
import { Terms } from './pages/Terms/Terms.jsx';
import { Privacy } from './pages/Privacy/Privacy.jsx';


// Конфігурація маршрутизації
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "contact/", element: <Contact /> },
      { path: "terms-conditions", element: <Terms /> },
      { path: "privacy-policy", element: <Privacy /> },


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);