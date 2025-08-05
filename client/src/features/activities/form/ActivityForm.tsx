import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { FormEvent } from 'react'

type Props = {
  activity?: Activity
  closeForm: () => void
}

export default function ActivityForm({
  activity,
  closeForm
}: Props) {
  
  const handleSubmit = (event: FormEvent) => {
    console.log(event)
  }

  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
      <Typography variant='h5' gutterBottom>
        Create Activity
      </Typography>
      <Box 
        component='form' 
        onSubmit={handleSubmit}
        display='flex' 
        flexDirection='column' 
        gap={3}
      >
        <TextField 
          label='Title'
          defaultValue={activity?.title}
        />
        <TextField 
          label='Description' 
          multiline rows={3} 
          defaultValue={activity?.description}
        />
        <TextField 
          label='Category'
          defaultValue={activity?.category}
        />
        <TextField 
          label='Date' 
          type='date' 
          defaultValue={activity?.title}
        />
        <TextField 
          label='City'
          defaultValue={activity?.city}
        />
        <TextField 
          label='Venue'
          defaultValue={activity?.venue}
        />
        <Box 
          display='flex' 
          justifyContent='end' 
          gap={3}
        >
          <Button 
            onClick={closeForm}
            className='dark'
          >
            Cancel
          </Button>
          <Button 
            type='submit'
            className='orange'
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}