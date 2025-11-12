import { Box, Container, CssBaseline, Typography } from '@mui/material'
import Navbar from './Navbar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { useActivities } from '../../lib/hooks/useActivities'

function App () {
  const { activities, isPending} = useActivities()

  return (
    <Box sx={{
      bgcolor: '#eee',
      minHeight: '100vh'
      }}
    >
      <CssBaseline />
      <Navbar />  
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

