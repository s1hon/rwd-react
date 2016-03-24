// import styles from '../stylesheets/main.css';
import React , { Component } from 'react';
import { render } from 'react-dom';
import Footer from 'components/footer';
import Header from 'components/header';

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
