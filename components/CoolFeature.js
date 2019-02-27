import React from 'react';
import './CoolFeature.css'

class CoolFeature extends React.Component {
  render() {
    return (
      <div className='cool-badge-holder'>
        <div className='cool-badge'>
          <span className='text'>Cool Go Feature</span>
          <span className='num'>{this.props.num}</span>
        </div>
      </div>
    )
  }

}

export default CoolFeature