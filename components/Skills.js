import React, { useState, useEffect } from 'react'

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
      <div>
        <div className='row align-items-center w-100'>
          {skills &&
            skills.map(({ faIcon }, i) => {
              if (faIcon === undefined) return
              return (
                <div key={i} className='col-4 p-3'>
                  <img
                    style={{
                      height: '100px',
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
    </>
  )
}

export default Skills
