import React from 'react'
import cssmodules from 'react-css-modules'
import styles from './styles.css'
import Form from 'components/form'
import Share from 'components/share'

const Footer = () => {
  return (
    <div styleName="footer">
      <h2 styleName="title">Euismod aliquam vehicula lorem</h2>
      <p styleName="content">
        Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
        Curabitur vel sem sit dolor neque semper magna lorem ipsum feugiat
        veroeros lorem ipsum dolore.
      </p>
      <Form />
      <Share />
    </div>
  )
}

export default cssmodules(Footer, styles)
