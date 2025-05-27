import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ListProductCategories from './components/ListProductCategories';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ListProductCategories />
      <ListProducts />
    </>
  );
}

export default App;
