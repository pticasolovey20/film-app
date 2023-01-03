import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { DetailPage } from './pages/DetailPage'
import { MainPage } from './pages/MainPage';
import { Footer } from './components/Footer';

import './styles.scss'

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/categories' element={<CategoriesPage/>}/>
          <Route path='/detail/:id' element={<DetailPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
