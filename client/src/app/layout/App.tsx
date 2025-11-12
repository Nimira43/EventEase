import { Box, Container, CssBaseline} from '@mui/material'
import Navbar from './Navbar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

function App () {
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
        <ActivityDashboard />
      </Container>
    </Box>
  )
}

export default App

