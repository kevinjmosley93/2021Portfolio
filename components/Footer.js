import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-success py-5'>
      <div className='text-center'>
        <img
          style={{ width: '150px', objectFit: 'cover', padding: '0' }}
          src='https://i.imgur.com/ZeBssMc.png'
          alt='logo'
        />
        <h6 className='mx-auto pb-4 font-weight-bold'>
          {currentYear} All Rights Reserved Kevin J Mosley | Software Engineer
        </h6>
        <div className='social-icons container d-flex flex-row justify-content-between w-50 pt-3 '>
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
      </div>
    </footer>
  )
}
