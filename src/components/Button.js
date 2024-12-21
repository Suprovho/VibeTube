import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-4 py-2 m-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white w-full sm:w-auto'>{name}</button>
    </div>
  )
}

export default Button