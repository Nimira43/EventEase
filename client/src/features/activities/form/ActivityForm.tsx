import { Paper, Typography } from '@mui/material'

export default function ActivityForm() {
  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
      <Typography variant='h5' gutterBottom>
        Create Activity
      </Typography>
    </Paper>
  )
}