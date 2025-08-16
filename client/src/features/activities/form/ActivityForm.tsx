import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { FormEvent } from 'react'

type Props = {
  activity?: Activity
  closeForm: () => void
  submitForm: (activity: Activity)
}

export default function ActivityForm({
  activity,
  closeForm
}: Props) {
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)

    const data: {[key: string]: FormDataEntryValue} = {}
    formData.forEach((value, key) => {
      data[key] = value
    })

    console.log(data)
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
          name='title'
          label='Title'
          defaultValue={activity?.title}
        />
        <TextField
          name='description'  
          label='Description'
          multiline rows={3} 
          defaultValue={activity?.description}
        />
        <TextField 
          name='category'
          label='Category'
          defaultValue={activity?.category}
        />
        <TextField 
          name='date' 
          label='Date' 
          type='date' 
          defaultValue={activity?.title}
        />
        <TextField 
          name='city'
          label='City'
          defaultValue={activity?.city}
        />
        <TextField 
          name='venue'
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