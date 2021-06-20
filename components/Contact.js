import React from 'react'
import { Container, Button } from 'react-bootstrap'

export const Contact = () => {
  return (
    <Container id='contact'>
      <h2 className='font-weight-bold py-3 text-center'>Contact Me</h2>
      <div className='row '>
        <div className='col-lg-7 mx-auto'>
          <div className='mt-2 mx-auto p-4 '>
            <div className=''>
              <Container>
                <form id='contact-form' role='form'>
                  <div className='controls'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          {' '}
                          <label for='form_name'>Firstname *</label>{' '}
                          <input
                            id='form_name'
                            type='text'
                            name='name'
                            className='form-control'
                            placeholder='Please enter your firstname *'
                            required='required'
                            data-error='Firstname is required.'
                          />{' '}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          {' '}
                          <label for='form_lastname'>Lastname *</label>{' '}
                          <input
                            id='form_lastname'
                            type='text'
                            name='surname'
                            className='form-control'
                            placeholder='Please enter your lastname *'
                            required='required'
                            data-error='Lastname is required.'
                          />{' '}
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          {' '}
                          <label for='form_email'>Email *</label>{' '}
                          <input
                            id='form_email'
                            type='email'
                            name='email'
                            className='form-control'
                            placeholder='Please enter your email *'
                            required='required'
                            data-error='Valid email is required.'
                          />{' '}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          {' '}
                          <label for='form_need'>
                            Please specify your need *
                          </label>{' '}
                          <select
                            id='form_need'
                            name='need'
                            className='form-control'
                            required='required'
                            data-error='Please specify your need.'>
                            <option value='' selected disabled>
                              --Select Your Service--
                            </option>
                            <option>Web Development</option>
                            <option>App Development</option>
                            <option>Job Interview</option>
                            <option>Other</option>
                          </select>{' '}
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          {' '}
                          <label for='form_message'>Message *</label>{' '}
                          <textarea
                            id='form_message'
                            name='message'
                            className='form-control'
                            placeholder='Write your message here.'
                            rows='4'
                            required='required'
                            data-error='Please, leave us a message.'></textarea>{' '}
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <Button
                          as='a'
                          href=''
                          className='font-weight-bold d-block'
                          variant='link'
                          size='md'>
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
