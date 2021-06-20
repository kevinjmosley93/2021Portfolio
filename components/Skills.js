import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
const Skills = () => {
  const [skillData, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(`${window.location.href}api/get-skills`)
    const data = await res.json()
    console.log('this is data', data)
    setData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const skills = skillData.map(({ fields: { name, faIcon } }) => ({
    name,
    faIcon
  }))
  return (
    <section className='bg-success py-2'>
      <Container id='skills'>
        <h2 className='font-weight-bold text-center py-3'>Skills</h2>
        <div>
          <div style={{ fontSize: '1.5rem' }} className='row text-center w-100'>
            {skills &&
              skills.map(({ faIcon, name }, i) => {
                if (faIcon === undefined) return
                return (
                  <div key={i} className='col-4 p-3 justify-content-between'>
                    <img
                      style={{
                        height: '75px',
                        width: '100%',
                        objectFit: 'contain'
                      }}
                      src={faIcon}
                    />
                  </div>
                )
              })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
