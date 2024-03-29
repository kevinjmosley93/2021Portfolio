import React, { useEffect, useState } from 'react'
import { ProjectCard } from 'components/ProjectCard'
import { Col, Container, Row } from 'react-bootstrap'
import Loading from './Loading'

const Projects = () => {
  const [projectData, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(`${window.location.origin}/api/get-projects`)
    const data = await res.json()
    // console.log('this is data', data)
    setData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Container id='projects'>
      <h2 className='font-weight-bold text-center py-3 animate__fadeInDown animate__animated'>
        Projects
      </h2>
      <Row>
        {projectData.length > 0 ? (
          projectData.sort((a, b) => a.fields.order - b.fields.order).map(pro => {
            // console.log('this is project:', pro)
            return <ProjectCard key={pro.id} project={pro} />
          })
        ) : (
          <div className='container py-3'>
            <Loading />
          </div>
        )}
      </Row>
    </Container>
  )
}

export default Projects
