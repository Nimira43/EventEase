import { Card, CardContent, CardMedia, Typography } from '@mui/material'


type Props = {
  activity: Activity
}

export default function ActivityDetail({activity}: Props) {
  return (
    <Card
      sx={{borderRadius: 3}}
    >
      <CardMedia
        component='img'      
        src={`/images/categoryImages/${activity.category}`} 
      />
      <CardContent>
        <Typography
          variant='h5'  
        >
          {activity.title}
        </Typography>
      </CardContent>
    </Card>
  )
}