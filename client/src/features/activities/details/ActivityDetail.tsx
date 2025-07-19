import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

type Props = {
  activity: Activity
  cancelSelectActivity: () => void
  openForm: (id: string) => void
}

export default function ActivityDetail({
  activity,
  cancelSelectActivity
}: Props) {
  return (
    <Card
      sx={{borderRadius: 3}}
    >
      <CardMedia
        component='img'      
        src={`/images/categoryImages/${activity.category}.jpg`} 
      />
      <CardContent>
        <Typography
          variant='h5'  
        >
          {activity.title}
        </Typography>
        <Typography
          variant='subtitle1'  
          fontWeight='light'
        >
          {activity.date}
        </Typography>
        <Typography
          variant='body1'  
        >
          {activity.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={cancelSelectActivity} 
          variant='contained'
          className='dark'
        >
          Cancel
          </Button> 
        <Button 
          variant='contained'
          className='orange'
        >
          Edit
        </Button> 
      </CardActions>
    </Card>
  )
}