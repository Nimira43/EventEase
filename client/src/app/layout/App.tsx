import { Box, Container, CssBaseline } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>()

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
    return () => {}
  }, [])

  return (
    <Box sx={{backgroundColor: '#eee'}}>
      <CssBaseline />
      <Navbar />  
      <Container 
        maxWidth='xl'
        sx={{ mt: 3 }}
      >
        <ActivityDashboard activities={activities}/>
      </Container>
    </Box>
  )
}

export default App

