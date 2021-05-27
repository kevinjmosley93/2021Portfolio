import React, { useEffect, useState } from 'react'
import { ProjectCard } from 'components/ProjectCard'
import { Col, Container, Row } from 'react-bootstrap'

const Projects = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(`${window.location.href}api/get-projects`)
    const data = await res.json()
    console.log('this is data', data)
    setData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Container>
      <h1 className='text-center'>Projects</h1>
      <Row>
        {data.length > 0 &&
          data.map(pro => {
            console.log('this is skill:', pro)
            return <ProjectCard key={pro.id} project={pro} />
          })}
      </Row>
    </Container>
  )
}

export default Projects
