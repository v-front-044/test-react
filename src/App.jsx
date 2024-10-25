import './assets/scss/app.scss';

import { Outlet } from 'react-router-dom';

import Footer from './components/_Layouts/Footer/Footer';
import Header from './components/_Layouts/Header/Header';


function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>

        <main className="page">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App;