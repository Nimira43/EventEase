import { Box, Container, CssBaseline, Typography } from '@mui/material'
import { useState } from 'react'
import Navbar from './Navbar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { useActivities } from '../../lib/hooks/useActivities'

function App () {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)
  const { activities, isPending} = useActivities()

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find(x => x.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id)
    else handleCancelSelectActivity()
    setEditMode(true)
  }

  const handleFormClose = () => {
    setEditMode(false)
  }


  return (
    <Box sx={{
      bgcolor: '#eee',
      minHeight: '100vh'
      }}
    >
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />  
      <Container 
        maxWidth='xl'
        sx={{ mt: 3 }}
      >
        {!activities || isPending ? (
          <Typography>
            Loading...
          </Typography>
        ) : (
          <ActivityDashboard />
        )}
      </Container>
    </Box>
  )
}

export default App

