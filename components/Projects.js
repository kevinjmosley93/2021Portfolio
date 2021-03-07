import React from 'react'
import { ProjectCard } from 'components/ProjectCard'
import { projects } from 'components/data/data'
import { Container, Row } from 'react-bootstrap'

const Projects = () => {
  return (
    <>
      <h1 className='text-center'>Projects</h1>
      {projects.map((project, index) => {
        console.log('this is skill:', project)
        return (
          <Container>
            <Row>
              <ProjectCard key={index} project={project} />
            </Row>
          </Container>
        )
      })}
    </>
  )
}

export default Projects
