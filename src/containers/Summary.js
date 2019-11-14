import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'

import { LinkIcon } from '../components'

function Summary() {
  const linkIcons = [
    { url: 'https://github.com/jkdmarks', iconName: 'github square', description: 'GitHub' },
    { url: 'https://www.linkedin.com/in/jkdmarks/', iconName: 'linkedin', description: 'LinkedIn' },
    { url: 'https://medium.com/@jkdmarks', iconName: 'medium', description: 'Blog' },
    { url: 'mailto:jkdmarks@gmail.com', iconName: 'mail', description: 'Email' },
    { url: 'https://jkdmarks.github.io/portfolio/Jeffrey-Marks-Resume.pdf', iconName: 'file text', description: 'Resume' },
  ]

  return (
      <Segment className='gray-container'>
        <Grid centered>
          <Grid.Column width={4} textAlign='center'>
            <div className='vertical-center'>
              <h1 className='title-text'>Jeffrey Marks</h1>
              <img src='./jeff.jpg' id='face-pic' alt='my face'/>

              <br/><br/>

              <p className='center-text'>
                {
                  linkIcons.map((linkIcon, i) => (
                    <LinkIcon key={i} {...linkIcon} />
                  ))
                }
              </p>
            </div>
          </Grid.Column>

          <Grid.Column width={1} />

          <Grid.Column width={10} id='blurb'>
            <div>
              <p>
                Hi, I'm Jeff! My primary hat is that of a Full-Stack Software Engineer.
              </p>

              <p>
                I’ve always loved problem-solving from a very young age. After I graduated from school with a B.Sc. in Mathematics I realized I wanted a more direct conduit for my problem-solving appetite. This is when I decided to become a Software Engineer so I attended Flatiron School’s web development intensive program and haven’t looked back since.
              </p>

              <p>
                The thing about programming that resonates the most with me is the instantaneous feedback loop that it provides. This makes learning new tools and technologies immensely gratifying. As soon as I learn something, I can immediately use that new knowledge in my code.
              </p>

              <p>
                Even more so, I love to be surrounded by people who love learning and problem-solving just as much as I do. When I’m among people like that, it makes learning and collaborating so much easier and more rewarding.
              </p>

              <p>
                I have extensive experience primarily in JavaScript ES6+, Ruby, HTML, CSS, and Git. I also have proficiency with React, Redux, Rails, PostgreSQL, SQLite, Python, C++, MATLAB, Excel, LaTeX, and Mathematica.
              </p>
            </div>
          </Grid.Column>

          <Grid.Column width={1} />
        </Grid>
      </Segment>
  )
}

export default Summary
