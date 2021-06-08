import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import Footer from './Footer';
import Header from './Header';

//importo botstrap
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <div>
    <Header />
    <Game />
    <Footer/>
  </div>,
  document.getElementById('root')
);

