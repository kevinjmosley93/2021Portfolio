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
    <Col style={{ height: '100%', width: '100%' }} md={4}>
      <div className='mb-5'>
        {/* <Image
            className='img-fluid img-top m-0 pb-2'
            src={img}
            alt={title}
            height={150}
            width='100%'
          /> */}
        <img
          style={{
            objectFit: 'fill',
            width: '100%',
            height: '150px'
          }}
          src={img}
          className='img-fluid m-0'
          alt={title}
        />
        <h5 className='font-weight-bold text-center my-2'>{title}</h5>
        <span className='row justify-content-around'>
          {builtWith.length > 0 &&
            builtWith.map(val => (
              <h6 className='py-1 font-weight-bold badge badge-col'>{val}</h6>
            ))}
        </span>
        <p style={{ lineHeight: '2rem' }} className='text-justify'>
          {body}
        </p>

        <div className='row justify-content-around '>
          <a target='_blank' href={liveLink} className='btn font-weight-bold'>
            <i className='fa fa-link'></i> Visit Site
          </a>
          {repo && (
            <a target='_blank' href={repo} className='btn font-weight-bold'>
              <i className='fa fa-github'></i> Github
            </a>
          )}
        </div>
      </div>
    </Col>
  )
}
