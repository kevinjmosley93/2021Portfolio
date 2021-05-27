import React from 'react'
import { ProjectCard } from 'components/ProjectCard'
import { projects } from 'components/data/data'
import { Col, Container, Row } from 'react-bootstrap'

const Projects = ({ data }) => {
  return (
    <Container>
      <h1 className='text-center'>Projects</h1>
      <Row>
        {data.map(pro => {
          console.log('this is skill:', pro)
          return <ProjectCard key={pro.id} project={pro} />
        })}
      </Row>
    </Container>
  )
}

export default Projects
