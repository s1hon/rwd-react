import React , { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Header extends Component{
  render(){
    return(
      <ul styleName="nav" >
        {
          ['Home' , 'About' , 'Products' , 'Contact']
          .map((element , id)=>{
            return <li key={id} ><a styleName="item">{element}</a></li>
          })
        }
      </ul>
    )
  }
}

export default CSSModules(Header , styles)
