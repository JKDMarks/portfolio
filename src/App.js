import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  const handleMenuItemClick = (e, {name}) => setActiveTab(name)

  return (
    <div className='App'>
      <Menu size={'massive'}>
        <Menu.Item header
          content={'Jeffrey Marks'}
        />

        <Menu.Item
          name={'about'}
          content={'About'}
          onClick={handleMenuItemClick}
          active={activeTab === 'about'}
        />

        <Menu.Item
          name={'projects'}
          content={'Projects'}
          onClick={handleMenuItemClick}
          active={activeTab === 'projects'}
        />

        <Menu.Item
          name={'resume'}
          content={'Resume'}
          onClick={handleMenuItemClick}
          active={activeTab === 'resume'}
        />
      </Menu>
    </div>
  )
}

export default App
