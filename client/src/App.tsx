import { useEffect, useState } from 'react'

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  useEffect(() => {
    fetch('https://localhost:5001/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data))
  }, [])

  return (
    <div>
      <h1 className='logo'>EventEase</h1>  
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

