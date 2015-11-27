import React , { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

// es7 decorator;
// https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.prp2ltajg
// @CSSModules(styles , options);

class Form extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <form styleName="form" method="post" action="#">
        <div>
          <input styleName="name" name="name" placeholder="Name" type="text" />
        </div>
        <div>
          <input styleName="email" name="email" placeholder="Email" type="text" />
        </div>
        <div>
          <textarea styleName="message" name="message" placeholder="Message"></textarea>
        </div>
        <div>
          <input styleName="submit" type="submit" value="Send Message" />  
        </div>
        <div>
          <input styleName="reset" type="reset" value="Clear form" />
        </div>
      </form>
    )
  }
}

export default CSSModules(Form, styles);
