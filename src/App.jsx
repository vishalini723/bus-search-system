import { useState } from 'react'

import './App.css'
import BusSchedule from './Components/BusSchedule'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-200">

    <BusSchedule />
    </div>
    </>
  )
}

export default App
