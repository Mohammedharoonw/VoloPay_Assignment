import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';


const AppLayout=()=>{
  return(
    <>
    <Header/>
 
    <Body/>
    <Footer/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <AppLayout />
  </React.StrictMode>
);


reportWebVitals();
