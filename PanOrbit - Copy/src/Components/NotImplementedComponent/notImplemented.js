import React from 'react';

export class NotImplemented extends React.Component{
  
  style = {
      color:'rgba(247, 225, 204, 0.808)',
      fontSize:'4.4rem',
      marginTop:'20%',
      letterSpacing:'1.2px'
  }
  
    render()
    {
        return(
            <h1  style={this.style} className="notImplemented">COMING SOON</h1>
        )
    }
}