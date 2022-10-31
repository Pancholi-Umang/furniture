import React from 'react'
import Card from './Card';
import Carddata from './Carddata';
import './Shop.css';

const Shop = () => {
  return (
    <div className='bgcolormate'>
      <Card details={Carddata}/>
    </div>
  )
}

export default Shop