import React from 'react'

import coat from '../assests/carousel/coat.png'
import galaxy from '../assests/carousel/galaxy.png'
import police from '../assests/carousel/police.png'
import coat2 from '../assests/carousel/coat2.png'
import insurance from '../assests/carousel/insurance.png'

const Item = () => {
  return (
    <div className='itemsca'>
      <h1 className='itemsca--title'> Our Amazing Clients</h1>
      <div className='item-centers'>
        <div>
          <img src={coat} alt='' />
          <span>Central Bank Of Nigeria</span>
        </div>
        <div>
          <img src={galaxy} alt='' />
        </div>
        <div>
          <img src={police} alt='' />
        </div>
        <div>
          <img src={insurance} alt='' />
        </div>

        <div>
          <img src={coat2} alt='' />
          <span>Central Bank Of Nigeria</span>
        </div>
      </div>
    </div>
  )
}

export default Item
