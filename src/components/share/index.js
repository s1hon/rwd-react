import React , { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

const Share = () => (
  <div styleName="share-list">
    {
      ['twitter' , 'facebook' , 'dribbble' , 'instagram' , 'youtube' , 'pinterest']
      .map((element , index)=>{
        return (
          <div key={index}>
            <a styleName={element}>{element}</a>
          </div>)
      })
    }
  </div>
)

export default CSSModules(Share, styles)
