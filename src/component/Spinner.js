import React, { Component } from 'react'
import loading from './Surrounded indicator.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-centre'>
        <img src={loading} alt="loading" />

    
      </div>
    )
  }
}
