import React from 'react'
import ButtonLIst from './ButtonLIst'
import VedioContainer from './VedioContainer'

const Maincontainer = () => {
  return (
    <div className='flex flex-wrap'>
        <ButtonLIst />
       <VedioContainer />
    </div>
  )
}

export default Maincontainer