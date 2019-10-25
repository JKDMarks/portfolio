import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header clearfix" style={{backgroundColor: "darkgrey", height: "15%"}}>
        <div className="clearfix" style={{float: "left", width: "35%"}}>
          <h1 style={{textAlign: "center", fontFamily: "Signika"}}>Jeffrey Marks</h1>

          <img style={{borderRadius: "50%", height: "250px"}} src="https://avatars0.githubusercontent.com/u/48098502" alt="my face"/>
        </div>

        <div style={{float: "right", width: "50%"}}>
          hi
        </div>
      </div>
    </div>
  )
}

export default App
