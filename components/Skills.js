import React, { useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5'

const skillsIcons = skillArr => {
  switch (skillArr.name) {
    case 'HTML':

    default:
      ''
  }
}

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
    <>
      <h1 className='text-center mb-3'>Skills</h1>
      <div
        style={{
          height: 'auto',
          display: 'flex'
        }}>
        {skills &&
          skills.map(({ faIcon }, i) => {
            if (faIcon === undefined) return
            return (
              <div className='container' key={i}>
                <div className='d-flex flex-wrap flex-row mb-5'>
                  <img
                    style={{
                      height: '100px',
                      width: '100%',
                      objectFit: 'contain'
                    }}
                    className=''
                    src={faIcon}
                  />
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Skills
