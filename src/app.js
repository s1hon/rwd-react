// import styles from '../stylesheets/main.css';
import React , { Component } from 'react';
import { render } from 'react-dom';
import Footer from './layouts/footer';
import Header from './layouts/header';

export default class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

render(<App /> , document.getElementById('app'));
