import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

export const ProjectCard = ({ project }) => {
  return (
    <Col lg={3} md={6} sm={12}>
      <Card className='bg-dark text-white mb-5'>
        <Card.Img variant='top' src={project.fields.img} alt='Card image' />
        <Card.Body>
          <Card.Title>{project.fields.title}</Card.Title>
          <Card.Text>{project.fields.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
