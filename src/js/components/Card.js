import React from 'react'

const Card = ({name, img, text}) =>{
    return (
      <div style={{flex: '1', margin: 'auto 3vmin'}}>
        <div style={{position: 'relative'}}>
          <h3 > {name}</h3>
          <div style={{height: '5px', width: '100%', backgroundColor: 'white', position: 'absolute', bottom: '8%'}}></div>
        </div>
        <div style={{position: 'relative'}}><img src={img} alt={name} style={{maxWidth: '100%'}} /></div>
        <p style={{fontSize: '12px'}}>{text}</p>
      </div>
    )
  }

  export default Card