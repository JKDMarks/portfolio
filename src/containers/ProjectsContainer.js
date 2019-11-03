import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import { ProjectCard } from '../components'

function ProjectsContainer() {
  const projects = [
    {
      name: 'Alexandria',
      imgSrc: 'https://i.imgur.com/sDnJILB.png',
      imgAlt: 'alexandria screenshot',
      links: [
        { url: 'https://www.youtube.com/watch?v=wA2RBYRZaFk', text: 'Demo Video' },
        { url: 'https://github.com/JKDMarks/alexandria-frontend', text: 'Frontend Github' },
        { url: 'https://github.com/JKDMarks/alexandria-backend', text: 'Backend Github' }
      ]
    }, {
      name: 'Cook This',
      imgSrc: 'https://i.imgur.com/yPfYLdy.png',
      imgAlt: 'cook this screenshot',
      links: [
        { url: 'https://cookthis.herokuapp.com/', text: 'Cook This Live Site' },
        { url: 'https://github.com/JKDMarks/cook-this-frontend', text: 'Frontend GitHub' },
        { url: 'https://github.com/JKDMarks/cook-this-backend', text: 'Backend GitHub' }
      ]
    }, {
      name: 'Swimmy Otter',
      imgSrc: 'https://i.imgur.com/KvXgcIW.png',
      imgAlt: 'swimmy otter screenshot',
      links: [
        { url: 'https://swimmy-otter.herokuapp.com/', text: 'Swimmy Otter Live Site' },
        { url: 'https://github.com/JKDMarks/swimmy-otter-frontend', text: 'Frontend GitHub' },
        { url: 'https://github.com/JKDMarks/swimmy-otter', text: 'Backend GitHub' },
      ]
    }, {
      name: 'Trade Tracker',
      imgSrc: 'https://i.imgur.com/T1TQwi4.png',
      imgAlt: 'trade tracker screenshot',
      links: [
        { url: false, text: 'Current Project (WIP)' },
        { url: 'https://github.com/JKDMarks/trade-tracker-frontend', text: 'Frontend GitHub' },
        { url: 'https://github.com/JKDMarks/trade-tracker-backend', text: 'Backend GitHub' }
      ]
    }
  ]

  // GROUPS projects BY TWOS (e.g. ['a', 'b', 'c', 'd', 'e'] => [['a', 'b'], ['c', 'd'], ['e']])
  const projectsInTwos = projects.reduce((acc, cur, idx) => {
  	if (idx % 2 === 0) {
  		return [...acc, projects.slice(idx, idx+2)]
  	} else {
  		return acc
  	}
  }, [])


  return (
    <Segment className='gray-container'>
      <h1 className='title-text' style={{textAlign: 'center'}}>Projects</h1>

      <Grid columns={2} textAlign='center'>
        {
          projectsInTwos.map((twoProjects, i) => (
            <Grid.Row key={i} style={{ height: 'auto' }}>
              {
                twoProjects.map((project, j) => (
                  <ProjectCard key={j} project={project} />
                ))
              }
            </Grid.Row>
          ))
        }
      </Grid>
    </Segment>
  )
}

export default ProjectsContainer
