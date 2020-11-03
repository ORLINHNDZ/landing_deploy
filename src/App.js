import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Contact from './components/pages/Contact/Contact';
import Pricing from './components/pages/Products/Products';
import ScrollToTop from './components/ScrollToTop';
import MessengerCustomerChat from 'react-messenger-customer-chat';
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <MessengerCustomerChat
        pageId="109698184257656"
        appId="817525709001583"
        />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path= '/contact' component={Contact} />
        
      </Switch>
      <Footer />
      
    </Router>
  );
}

export default App;
