import { Box, Button, Paper, Typography } from '@mui/material'
import { useActivities } from '../../../lib/hooks/useActivities'
import { useParams } from 'react-router'
import { useForm} from 'react-hook-form'
import { useEffect } from 'react'
import { activitySchema, ActivitySchema } from '../../../lib/schemas/activitySchema'
import { zodResolver } from '@hookform/resolvers/zod'
import TextInput from '../../../app/shared/components/TextInput'

export default function ActivityForm() {
  const {
    control,
    reset,
    handleSubmit
  } = useForm<ActivitySchema>({
    mode: 'onTouched',
    resolver: zodResolver(activitySchema)
  })

  const { id } = useParams()
  const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id)

  useEffect(() => {
    if (activity) reset(activity)
  }, [activity, reset])

  const onSubmit = (data: ActivitySchema) => {
    console.log(data)
  }

  if(isLoadingActivity) return <Typography>Loading activity...</Typography>

  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
      <Typography
        variant='h5'
        sx={{ mb: 3 }}
      >
        {activity
          ? 'Edit Activity'
          : 'Create Activity'
        }
      </Typography>
      <Box 
        component='form' 
        onSubmit={handleSubmit(onSubmit)}
        display='flex' 
        flexDirection='column' 
        gap={3}
      >
        <TextInput
          label='Title'
          control={control}
          name='title'
        />
        <TextInput
          label='Description'
          control={control}
          name='description'
          multiline
          rows={3}
        />
        <TextInput
          label='Category'
          control={control}
          name='category'
        />
        <TextInput
          label='Date'
          control={control}
          name='date'
        />
        <TextInput
          label='City'
          control={control}
          name='city'
        />
        <TextInput
          label='Venue'
          control={control}
          name='venue'
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
            className='main'
            disabled={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}