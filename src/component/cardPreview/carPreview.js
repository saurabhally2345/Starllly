import React from 'react';

import Card from '../card/card';
import './carePreview.scss';

const CardPreview = ({collection}) => {
  return (
    <div className='card'>
      {
        collection.map((item,index) => (
          <Card key={index} {...item}/>
        ) 
       )
      }
    </div>
  )
}

export default CardPreview;