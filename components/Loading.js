import React from 'react'

const Loading = () => {
  return (
    <div style={{ fontSize: '3rem' }} className='container text-center py-5'>
      <span>Loading Content...</span> <br />
      <div
        className='spinner-border'
        style={{ width: '3rem', height: '3rem' }}
        role='status'
      />
    </div>
  )
}

export default Loading
