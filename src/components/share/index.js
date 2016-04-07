import React from 'react'
import cssmodules from 'react-css-modules'
import styles from './styles.css'

const Share = () => {
  return (
    <div styleName="share-list">
      {
        ['twitter', 'facebook', 'dribbble', 'instagram', 'youtube', 'pinterest']
        .map((element, index) => {
          return (
            <div key={ index }>
              <a styleName={ element }>{ element }</a>
            </div>)
        })
      }
    </div>
  )
}

export default cssmodules(Share, styles)
