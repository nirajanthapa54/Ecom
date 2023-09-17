import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import About from './About';
import Cart from './Cart';
import Footer from './component/Footer';
import Header from './component/Header';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import Home from './Home';
import Products from './Products';
import SingleProduct from './SingleProduct';

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
};

export default App;
























/*
import Restaurant from "./component/basics/Restaurant";
const App = () => 
{
return <Restaurant/>
}

export default App;


*/

  
















/*import React from "react";
// import SignUp from "./SignUp";
import Registration from "./Registration";

const App = () => {
  // return <SignUp />;
  return <Registration />;
};

export default App;
*/
/*
//import Restaurant from "./component/basics/Restaurant";
//import UseState from './component/hooks/useState';
//import UseEffect from './component/hooks/useEffect';
//import Form from './component/hooks/form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Contact from './Contact';
import Home from './Home';
import Product from './Product';
import About from './About';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
const App = () => 
{

  const theme={
    colors:{
bg:"#F6F8FA",
footer_bg:"#0a1435",
border:"rgba(98,84,243,0.5)",
heading:"rgb(24,24,243)",
hr:"#ffff",
gradient:"linear-gradient(0deg,rgba(132,144,255) 0% rgba(132,144,255) 100#",
shadow: "rgba(0,0,0,0.16)  0px 1px 3px 0px ,rgba(27,31,35,0,0.16) 0px 0px 0px 1px;", 

shadowSupport:"rgba(0,0,0,0.16)  0px 1px 4px",


    },
    media:{
      mobile:"768px",
      tab:"1000px",
    },
  };
  //return <Restaurant/>
  //return <UseState/>
 //return <UseEffect/>// <Header/>
  //return <Form/>
  return(
   <ThemeProvider theme ={theme}>
<Router>
<GlobalStyle/>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Product" element={<Product/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="*" element={<ErrorPage/>}/>
</Routes>
</Router>
</ThemeProvider>
  );
};

export default App;












/*
const App=()=> {
  return (
 
    <>  

     
     <MyName/>
     <MyClass/>
    Learn React
      <h1>hello my name is nirajan thapa</h1>
     
    </>
  );
}



const MyName=()=> {
  return (<h1>acme enginerring college</h1>
     );
}
const MyClass=()=> {
  return (<h1>sitipaiala kathamdu</h1>
     );
}



export default App;



import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h1>hello my name is nirajan thapa</h1>
        </a>
      </header>
    </div>
  );
}

export default App;

*/
