import { Card, CardMedia } from '@mui/material'

type Props = {
  activity: Activity
}

export default function ActivityDetail({activity}: Props) {
  return (
    <Card
      sx={{borderRadius: 3}}
    >
      <CardMedia
        component='img'      >
        src={`images/categoryImages/${}`}
      </CardMedia>

    </Card>
  )
}