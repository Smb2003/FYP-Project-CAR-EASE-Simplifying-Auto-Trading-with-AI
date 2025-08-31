import './App.css'
import CarList from './components/CarList';
import Header from './components/Header';
import Main from './components/Main';
import AboutCardList from './components/AboutCardList';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <CarList/>
      <Services/>
      <AboutCardList/>
      <Footer/>
    </>
  );
}

export default App;
