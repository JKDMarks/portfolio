import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import Containers from './containers'
const { Summary, ProjectsContainer } = Containers

function App() {
  return (
    <div className='App'>
      <Summary />
      <ProjectsContainer />
    </div>
  )
}

export default App
