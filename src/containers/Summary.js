import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'

import { LinkIcon } from '../components'

function Summary() {
  const linkIcons = [
    { url: 'https://github.com/jkdmarks', iconName: 'github square' },
    { url: 'https://www.linkedin.com/in/jkdmarks/', iconName: 'linkedin' },
    { url: 'https://medium.com/@jkdmarks', iconName: 'medium' },
    { url: 'mailto:jkdmarks@gmail.com', iconName: 'mail' },
    { url: 'https://jkdmarks.github.io/portfolio/Jeffrey-Marks-Resume.pdf', iconName: 'file text' },
  ]

  return (
      <Segment className='gray-container'>
        <Grid centered>
          <Grid.Column width={4} textAlign='center'>
            <h1 className='title-text'>Jeffrey Marks</h1>
            <img src='./jeff.jpg' id='face-pic' alt='my face'/>
          </Grid.Column>

          <Grid.Column width={1} />

          <Grid.Column width={7} id='blurb'>
            <div className='vertical-center'>
              <p>Hi, I'm Jeff! My primary hat is that of a Full-Stack Software Engineer. I have extensive experience in JavaScript, React, Ruby, Ruby on Rails and much more.</p>

              <br/>

              <p className='center-text'>
                {
                  linkIcons.map(({ url, iconName }) => (
                    <LinkIcon key={iconName} url={url} iconName={iconName} />
                  ))
                }
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
  )
}

export default Summary
