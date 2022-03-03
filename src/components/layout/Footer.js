import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <div className='bg-info'>
      <p className='py-2 ml-5 mr-auto text-white'>
        copyright { String.fromCharCode(169)}
        {' ' + date.getFullYear()} House of Vinyl
      </p>
      
    </div>
  )
}

export default Footer