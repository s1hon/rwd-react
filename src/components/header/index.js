import React , { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

const Header = () => (
  <ul styleName="nav" >
    {
      ['Home' , 'About' , 'Products' , 'Contact']
      .map((element , id)=>{
        return <li key={id} ><a styleName="item">{element}</a></li>
      })
    }
  </ul>
)

export default CSSModules(Header , styles)
