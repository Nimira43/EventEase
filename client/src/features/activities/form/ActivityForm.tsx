import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { FormEvent } from 'react'
import { useActivities } from '../../../lib/hooks/useActivities'
import { textFieldStyles } from '../../../utils/textFieldStyles'

export default function ActivityForm() {
  const {updateActivity, createActivity} = useActivities()
  const activity = {} as Activity

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)

    const data: {[key: string]: FormDataEntryValue} = {}
    formData.forEach((value, key) => {
      data[key] = value
    })

    if (activity) {
      data.id = activity.id
      await updateActivity.mutateAsync(data as unknown as Activity)
 
    } else {
      await createActivity.mutateAsync(data as unknown as Activity)
    }
  }

  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
      <Typography
        variant='h5'
        sx={{ mb: 3 }}
      >
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
          sx={textFieldStyles}
        />
        <TextField
          name='description'  
          label='Description'
          multiline rows={3} 
          defaultValue={activity?.description}
          sx={textFieldStyles}
        />
        <TextField 
          name='category'
          label='Category'
          defaultValue={activity?.category}
          sx={textFieldStyles}
        />
        <TextField 
          name='date' 
          label='Date' 
          type='date' 
          defaultValue={activity?.date
            ? new Date(activity.date)
              .toISOString()
              .split('T')[0]
            : new Date()
              .toISOString()
              .split('T')[0]
          }
          sx={textFieldStyles}
        />
        <TextField 
          name='city'
          label='City'
          defaultValue={activity?.city}
          sx={textFieldStyles}
        />
        <TextField 
          name='venue'
          label='Venue'
          defaultValue={activity?.venue}
          sx={textFieldStyles}
        />
        <Box 
          display='flex' 
          justifyContent='end' 
          gap={2}
        >
          <Button className='dark'>
            Cancel
          </Button>
          <Button 
            type='submit'
            className='teal'
            disabled={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}