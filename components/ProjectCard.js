import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

export const ProjectCard = ({ project }) => {
  const {
    fields: { title, body, img, builtWith, liveLink, repo }
  } = project

  return (
    <Col className='px-3 mb-3' md={4}>
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
        <h5 className='font-weight-bold text-center my-3'>{title}</h5>
        <span className='row justify-content-around'>
          {builtWith.length > 0 &&
            builtWith.map(val => (
              <h6 className='p-1 font-weight-bold badge badge-col'>{val}</h6>
            ))}
        </span>
        <p style={{ lineHeight: '2rem' }} className='text text-left'>
          {body}
        </p>
        <div className='row justify-content-around container'>
          <a target='_blank' href={liveLink} className='btn font-weight-bold'>
            <i className='fa fa-link'></i> Visit Site
          </a>
          {repo && (
            <a target='_blank' href={repo} className='btn font-weight-bold'>
              <i className='fa fa-github'></i> Github
            </a>
          )}
        </div>
      </Container>
    </Col>
  )
}
