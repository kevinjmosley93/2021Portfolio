import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-success'>
      <div className='text-center'>
        <img
          style={{
            width: '200px',
            height: '300px',
            objectFit: 'contain',
            padding: '0',
            margin: '0'
          }}
          className='pb-3'
          src='https://i.imgur.com/77wDnMB.png'
          alt='logo'
        />
        <div className='social-icons container d-flex flex-row justify-content-between w-50 pb-5 '>
          <a
            className='social-icon'
            href='https://www.linkedin.com/in/kevinjmosley/'
            target='_blank'>
            <i className='fa fa-linkedin-in'></i>
          </a>
          <a
            className='social-icon'
            href='https://github.com/kevinjmosley93'
            target='_blank'>
            <i className='fa fa-github'></i>
          </a>
          <a
            className='social-icon'
            href='https://www.facebook.com/kevin.mosley.399/'
            target='_blank'>
            <i className='fa fa-facebook'></i>
          </a>
          <a
            className='social-icon'
            href='mailto:kevinjmosley93@gmail.com'
            target='_blank'>
            <i className='fa fa-envelope'></i>
          </a>
        </div>

        <h6 className='mx-auto my-0 pb-2 font-weight-bold'>
          {currentYear} All Rights Reserved Kevin J Mosley | Software Engineer
        </h6>
      </div>
    </footer>
  )
}
