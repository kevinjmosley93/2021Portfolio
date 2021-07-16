import React from 'react'
import { Row, Col, Card, Container, Modal } from 'react-bootstrap'

export const ProjectCard = ({ project }) => {
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  const {
    fields: { title, body, img, builtWith, liveLink, repo }
  } = project

  return (
    <Col style={{ height: '100%', width: '100%' }} md={12}>
      <div className='row justify-content-center mb-5'>
        {/* <Image
            className='img-fluid img-top m-0 pb-2'
            src={img}
            alt={title}
            height={150}
            width='100%'
          /> */}
        <img
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%'
          }}
          src={img}
          className='img-fluid rounded m-0 col-md-5'
          alt={title}
        />
        <div className='col-md-7'>
          <h1 className='font-weight-bold text-center pb-2'>{title}</h1>
          <span className='row justify-content-between px-3'>
            {builtWith.length > 0 &&
              builtWith.map((val, idx) => (
                <h6 key={idx} className='py-1 font-weight-bold badge badge-col'>
                  {val}
                </h6>
              ))}
          </span>
          <p style={{ lineHeight: '2rem' }} className='text-justify'>
            {body}
          </p>
          <span className='px-3 row justify-content-around'>
            <a
              target='_blank'
              href={liveLink}
              className='font-weight-bold pr-3 btn btn-md btn-success'>
              <i className='fa fa-link'></i> Live Site
            </a>
            {repo && (
              <a
                target='_blank'
                href={repo}
                className='font-weight-bold btn btn-md btn-success'>
                <i className='fa fa-github'></i> Github
              </a>
            )}
          </span>
        </div>
      </div>
    </Col>
  )
}
