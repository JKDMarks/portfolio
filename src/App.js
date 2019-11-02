import React from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import Containers from './containers'
const { Summary } = Containers

function App() {
  // const linkIcons = [
  //   { url: 'https://github.com/jkdmarks', iconName: 'github square' },
  //   { url: 'https://www.linkedin.com/in/jkdmarks/', iconName: 'linkedin' },
  //   { url: 'https://medium.com/@jkdmarks', iconName: 'medium' },
  //   { url: 'mailto:jkdmarks@gmail.com', iconName: 'mail' },
  //   { url: 'https://jkdmarks.github.io/portfolio/Jeffrey-Marks-Resume.pdf', iconName: 'file text' },
  // ]

  return (
    <div className='App'>
      <Summary />
      {/*<Segment className='gray-container'>
        <Grid centered>
          <Grid.Column width={4} textAlign='center'>
            <h1 className='title-text'>Jeffrey Marks</h1>
            <img src='./jeff.jpg' id='face-pic' alt='my face'/>
          </Grid.Column>

          <Grid.Column width={1} />

          <Grid.Column width={7} id='blurb'>
            <p>Hi, I'm Jeff! My primary hat is that of a Full-Stack Software Engineer. I have extensive experience in JavaScript, React, Ruby, Ruby on Rails and much more.</p>

            <br/>

            <p style={{textAlign: 'center'}}>
              {linkIcons.map(({ url, iconName }) => <Components.LinkIcon url={url} iconName={iconName} /> )}
            </p>
          </Grid.Column>
        </Grid>
      </Segment>*/}


      <Segment className='gray-container'>
        <h1 className='title-text' style={{textAlign: 'center'}}>Projects</h1>

        <Grid columns={2} textAlign='center'>
          <Grid.Row style={{height: 'auto'}}>
            <Grid.Column>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='https://i.imgur.com/sDnJILB.png' alt='alexandria screenshot' style={{maxHeight: '100%'}}/>
                    <p className='text-on-img'>Alexandria</p>
                  </div>
                  <div className='flip-card-back'>
                    <a href='https://www.youtube.com/watch?v=wA2RBYRZaFk'>
                      <h2>Demo Video</h2>
                    </a>
                    <a href='https://github.com/JKDMarks/alexandria-frontend'>
                      <h2>Frontend GitHub</h2>
                    </a>
                    <a href='https://github.com/JKDMarks/alexandria-backend'>
                      <h2>Backend GitHub</h2>
                    </a>
                  </div>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='https://i.imgur.com/yPfYLdy.png' alt='cook this screenshot' style={{maxHeight: '100%'}}/>
                    <p className='text-on-img'>Cook This</p>
                  </div>
                  <div className='flip-card-back'>
                    <a href='https://cookthis.herokuapp.com/'>
                      <h2>Cook This Live Site</h2>
                    </a>
                    <a href='https://github.com/JKDMarks/cook-this-frontend'>
                      <h2>Frontend GitHub</h2>
                    </a>
                    <a href='https://github.com/JKDMarks/cook-this-backend'>
                      <h2>Backend GitHub</h2>
                    </a>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='https://i.imgur.com/KvXgcIW.png' alt='swimmy otter screenshot' style={{maxHeight: '100%'}}/>
                    <p className='text-on-img'>Swimmy Otter</p>
                  </div>
                  <div className='flip-card-back'>
                    <a href='https://swimmy-otter.herokuapp.com/'>
                      <h2>Swimmy Otter Live Site</h2>
                    </a>
                    <a href='https://github.com/JKDMarks/swimmy-otter-frontend'>
                      <h2>Frontend GitHub</h2>
                    </a>
                    <a href='https://github.com/JKDMarks/swimmy-otter'>
                      <h2>Backend GitHub</h2>
                    </a>
                  </div>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='https://i.imgur.com/T1TQwi4.png' alt='trade tracker screenshot' style={{maxHeight: '100%'}}/>
                    <p className='text-on-img'>Trade Tracker</p>
                  </div>
                  <div className='flip-card-back'>
                    <h2 className='not-link'>Current Project (WIP)</h2>

                    <a href='https://github.com/JKDMarks/trade-tracker-frontend'>
                      <h2>Frontend GitHub</h2>
                    </a>
                    <a href='https://github.com/JKDMarks/trade-tracker-backend'>
                      <h2>Backend GitHub</h2>
                    </a>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default App