import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router'

export default function ActivityDetail() {
  const navigate = useNavigate()
  const activity = {} as Activity
 
  if (!activity) return <Typography>Loading...</Typography>

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
        <Box 
          display='flex' 
          justifyContent='end' 
          gap={2}
        >
          <Button
          onClick={() => navigate('/activities')} 
          variant='contained'
          className='dark'
          >
            Cancel
          </Button> 
          <Button 
            component={Link}
            to={`/activities/${activity.id}`}
            variant='contained'
            className='teal'
          >
            Edit
          </Button>
        </Box>
         
      </CardActions>
    </Card>
  )
}