import { Box, Button, Paper, TextField, Typography } from '@mui/material'

type Props = {
  activity?: Activity
  closeForm: () => void
}

export default function ActivityForm() {
  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
      <Typography variant='h5' gutterBottom>
        Create Activity
      </Typography>
      <Box component='form' display='flex' flexDirection='column' gap={3}>
        <TextField label='Title'/>
        <TextField label='Description' multiline rows={3} />
        <TextField label='Category'/>
        <TextField label='Date' type='date' />
        <TextField label='City'/>
        <TextField label='Venue'/>
        <Box display='flex' justifyContent='end' gap={3}>
          <Button className='dark'>Cancel</Button>
          <Button className='orange'>Submit</Button>
        </Box>
      </Box>
    </Paper>
  )
}