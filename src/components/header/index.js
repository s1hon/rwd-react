import React from 'react'
import cssmodules from 'react-css-modules'
import styles from './styles.css'

const Header = () => {
  return (
    <ul styleName="nav" >
      {
        ['Home', 'About', 'Products', 'Contact']
        .map((element, id) => {
          return <li key={ id } ><a styleName="item">{ element }</a></li>
        })
      }
    </ul>
  )
}

export default cssmodules(Header, styles)
