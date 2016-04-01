import React , { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Form = () => {
  return(
    <form styleName="form" method="post" action="#">
      <input styleName="name" name="name" placeholder="Name" type="text" />
      <input styleName="email" name="email" placeholder="Email" type="text" />
      <textarea styleName="message" name="message" placeholder="Message" />
      <input styleName="submit" type="submit" value="Send Message" />
      <input styleName="reset" type="reset" value="Clear form" />
    </form>
  )
}

export default CSSModules(Form, styles);
