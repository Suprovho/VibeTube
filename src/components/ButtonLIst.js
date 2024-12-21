import React from 'react'
import Button from './Button'


const ButtonLIst = () => {
   const List=["All","Songs","Gaming","Live","Football","Cricket","Cooking","Recently uploaded","Python","Wildlife","Cars"];

  return (
    <div className='flex flex-wrap mt-16 gap-4 p-4'>
      {List.map((list,index)=><Button key={index} name={list} />)}
    </div>
  )
}


export default ButtonLIst