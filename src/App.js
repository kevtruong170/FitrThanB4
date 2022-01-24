import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Button from './components/Button'
import Form from './components/Form'
import Navbar from './Navbar'

const App = () => {
  
  const title = "Welcome to FitrThanB4"
  const linkLC = "http://leetcode.com"

  const [tasks, setTasks] = useState([
    {
        exercise:'bench press',
        weight:'160',
        rep:'3',
    },
    {
      exercise:'squat',
      weight:'160',
      rep:'3',
  },
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {title}
        </h1>
        <Navbar></Navbar>  
        <a href={linkLC} style={{
          color:'green',
          backgroundColor:'f1356d',
          borderRadius: '8px'
        }}>Click here to go to LeetCode</a>
        <Header title='FitrThanB4'/>
        
        <Tasks tasks={tasks}></Tasks>
        <Form></Form>
        
      </header>
    </div>
  )
}

export default App
