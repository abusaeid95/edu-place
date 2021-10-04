import logo from './logo.svg';
import './App.css';
import Infobar from './Components/StatuBar/Infobar';
import MenuBar from './Components/MenuBar/MenuBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/Not Found/NotFound';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="main">
      <Router>
        <Infobar></Infobar>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path='/notfound'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
