import React , { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Share extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div styleName="share-list">
        {
          ['twitter' , 'facebook' , 'dribbble' , 'instagram' , 'youtube' , 'pinterest']
          .map((element , index)=>{
            return (<div key={index}><a styleName={element.slice(0,2)}>{element}</a></div>)
          })
        }
      </div>
    )
  }
}

export default CSSModules(Share, styles)
