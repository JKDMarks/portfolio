import React, { useState } from 'react'
import { Grid, Segment, Popup, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  const handleMenuItemClick = (e, {name}) => setActiveTab(name)

  return (
    <div className='App'>
      <Segment className='gray-container'>
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
              <a href='https://github.com/jkdmarks'>
                <Icon name='github square' size='big'/>
              </a>

              <a href='https://www.linkedin.com/in/jkdmarks/'>
                <Icon name='linkedin' size='big'/>
              </a>

              <a href='https://medium.com/@jkdmarks'>
                <Icon name='medium' size='big'/>
              </a>
            </p>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment className='gray-container'>
        <h1 className='title-text' style={{textAlign: 'center'}}>Projects</h1>

        <Grid columns={2} centered>
          <Grid.Row>
            <Grid.Column>hi</Grid.Column>
            <Grid.Column>hi</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>hi</Grid.Column>
            <Grid.Column>hi</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default App
