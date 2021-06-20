import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

export const ProjectCard = ({ project }) => {
  const {
    fields: { title, body, img, builtWith, liveLink, repo }
  } = project

  return (
    <Col className='px-3 mb-2' md={4}>
      <Container>
        <img
          style={{
            objectFit: 'fill',
            width: '100%',
            height: '150px'
          }}
          src={img}
          className='img-fluid'
          alt={title}
        />
        <h5 className='title text-center my-2'>{title}</h5>
        <span className='row justify-content-around'>
          {builtWith.length > 0 &&
            builtWith.map(val => (
              <h6 className='subtitle mb-2 text-muted badge badge-col'>
                {val}
              </h6>
            ))}
        </span>
        <p style={{ lineHeight: '2rem' }} className='text text-left'>
          {body}
        </p>
        <div className='row justify-content-between'>
          <a href={liveLink} className='btn mr-2'>
            <i className='fa fa-link'></i> Visit Site
          </a>
          {repo && (
            <a href={repo} className='btn '>
              <i className='fa fa-github'></i> Github
            </a>
          )}
        </div>
      </Container>
    </Col>
  )
}
