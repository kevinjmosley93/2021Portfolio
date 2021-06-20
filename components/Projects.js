import React, { useEffect, useState } from 'react'
import { ProjectCard } from 'components/ProjectCard'
import { Col, Container, Row } from 'react-bootstrap'

const Projects = () => {
  const [projectData, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(`${window.location.href}api/get-projects`)
    const data = await res.json()
    console.log('this is data', data)
    setData(data)
  }
  useEffect(async () => {
    await fetchData()
  }, [])
  return (
    <Container id='projects'>
      <h2 className='text-center py-3'>Projects</h2>
      <Row>
        {projectData.length > 0 &&
          projectData.map(pro => {
            console.log('this is project:', pro)
            return <ProjectCard key={pro.id} project={pro} />
          })}
      </Row>
    </Container>
  )
}

export default Projects
