import { useEffect, useState } from 'react'

const App = () => {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    fetch('https://localhost:5001/api/activities')
    .then(response => response.json())
  }, [])

  return (
    <div>
      <h1 className='logo'>EventEase</h1>      
    </div>
  )
}

export default App

