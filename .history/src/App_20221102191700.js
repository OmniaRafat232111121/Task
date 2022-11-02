import Brands from './components/Brands';
import Feature3 from './components/Feature3';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Overview2 from './components/OverView2';
import Product from './components/Product';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='overflow-hidden'>
    <Header/>
    <Hero/>
    <Brands/>
   <Overview/>
   <Product/>
   <Overview2/>
   <Feature3/>
   <Footer/>
   
    </div>
  );
}

export default App;
