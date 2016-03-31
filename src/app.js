import React , { Component } from 'react';
import { render } from 'react-dom';
import Footer from 'components/footer';
import Header from 'components/header';
import 'shared/stylesheets/normalize.css';

// https://gist.github.com/Turbo87/e8e941e68308d3b40ef6
import 'font-awesome/css/font-awesome.css';

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
