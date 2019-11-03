import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import { Summary, ProjectsContainer } from './containers'

function App() {
  return (
    <div className='App'>
      <Summary />
      <ProjectsContainer />
    </div>
  )
}

export default App
