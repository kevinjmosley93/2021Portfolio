import React from 'react'
import { Container, Button } from 'react-bootstrap'

export const Contact = () => {
  const [formInput, setFormInput] = React.useState({
    form: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  })

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setFormInput(currState => {
      const updatedForm = { ...currState.form, ...updatedField }
      // console.log({ updatedForm })
      return { form: updatedForm }
    })
  }

  const handleForm = async e => {
    try {
      e.preventDefault()
      const { firstName, lastName, email, message } = formInput.form

      const body = {
        firstName,
        lastName,
        email,
        message
      }

      const url = `${window.location.origin}/api/create-clients`
      const params = {
        method: 'POST',
        body: JSON.stringify(body)
      }
      const res = await fetch(url, params)
      const data = await res.json()
      // console.log(data)
      data &&
        setFormInput({
          form: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          }
        })
    } catch (err) {
      console.error(err)
    }
  }

  const {
    form: { firstName, lastName, email, message }
  } = formInput

  return (
    <Container id='contact'>
      <h2 className='font-weight-bold py-3 text-center animate__fadeInDown animate__animated'>
        Contact Me
      </h2>
      <div className='row '>
        <div className='col-lg-7 mx-auto'>
          <div className='mt-2 mx-auto p-4 '>
            <div className=''>
              <Container>
                <form onSubmit={handleForm}>
                  <div className='controls'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          {' '}
                          <label htmlFor='form_name'>Firstname *</label>{' '}
                          <input
                            id='form_name'
                            type='text'
                            onChange={handleChange}
                            name='firstName'
                            value={firstName}
                            className='form-control'
                            placeholder='Please enter your firstname *'
                          />{' '}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          {' '}
                          <label htmlFor='form_lastname'>Lastname *</label>{' '}
                          <input
                            id='form_lastname'
                            type='text'
                            onChange={handleChange}
                            name='lastName'
                            value={lastName}
                            className='form-control'
                            placeholder='Please enter your lastname *'
                          />{' '}
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          {' '}
                          <label htmlFor='form_email'>Email *</label>{' '}
                          <input
                            id='form_email'
                            type='email'
                            onChange={handleChange}
                            name='email'
                            value={email}
                            className='form-control'
                            placeholder='Please enter your email *'
                          />{' '}
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          {' '}
                          <label htmlFor='form_message'>Message *</label>{' '}
                          <textarea
                            id='form_message'
                            type='text'
                            onChange={handleChange}
                            name='message'
                            value={message}
                            className='form-control'
                            placeholder='Write your message here.'
                            rows='4'></textarea>{' '}
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <Button
                          as='button'
                          type='submit'
                          className='font-weight-bold btn-block'
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
