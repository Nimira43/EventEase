import { Box, Paper, TextField, Typography } from '@mui/material'

export default function ActivityForm() {
  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
      <Typography variant='h5' gutterBottom>
        Create Activity
      </Typography>
      <Box component='form' display='flex' flexDirection='column' gap={3}>
        <TextField label='Title'/>
        <TextField label='Title'/>
        <TextField label='Title'/>
        <TextField label='Title'/>
        <TextField label='Title'/>
      </Box>
    </Paper>
  )
}