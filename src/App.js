import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import Home from './navigation/Home';
import Product from './navigation/Product';
import Categories from './navigation/Categories';
import Flashdeal from './navigation/Flashdeal';
import Blog from './navigation/Blog'
import TourCard from './navigation/TourCard';
import { ProductList } from './views/product/ProductList';
import Menuappbar from './Appbar/Menuappbar';
import { Container } from '@mui/system';
import MenuBar from './Appbar/MenuBar';
import Headbar from './Appbar/Headbar';
import Productreview from './Productdescription/Productreview';


const NavbarOption = ["Hello", "Welcome ", "How ", "Why"];
function App() {
  return (
    <>

      <Menuappbar />

      {/* <MenuBar  /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productid" element={<Productreview />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/flashdeal" element={<Flashdeal />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      
    </>
  );
}

export default App;
