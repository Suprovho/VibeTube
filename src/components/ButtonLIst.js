import React from 'react'
import Button from './Button'

const ButtonLIst = () => {
   const List=["All","Songs","Gaming","Live","Football","Cricket","Cooking","Recently uploaded","Python","Wildlife","Cars","News"];

  return (
    <div className='flex mt-16'>
      {List.map((list,index)=><Button key={index} name={list} />)}
    </div>
  )
}

export default ButtonLIst