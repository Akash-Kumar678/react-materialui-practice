
import './App.css';
import Header from './components/header'
import Nav from './components/nav';
import Carousel from './components/carousel';
import Posts from './components/posts';
import Maincont from './components/maincont';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Carousel/>
    <Posts/>
    <Maincont/>
    <Footer/>
    </div>
  );
}

export default App;
