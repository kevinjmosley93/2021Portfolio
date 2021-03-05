import React from 'react'
import { projects } from 'components/data/data'

export const ProjectCard = () => {
  return (
    <div className='grid_wrapper container'>
      {projects.map(
        project => console.log('this is skill:', project)

        // <div className='grid_item card'>{skill.name}</div>
      )}
    </div>
  )
}
