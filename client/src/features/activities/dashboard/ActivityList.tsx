import { Box, Typography } from '@mui/material'
import ActivityCard from './ActivityCard'
import { useActivities } from '../../../lib/hooks/useActivities'

type Props = {
  activities: Activity[]
  selectActivity: (id: string) => void
}

export default function ActivityList({
  activities, 
  selectActivity,
}: Props) {
  const { activities, isPending} = useActivities()

  if (!activities || isPending) return <Typography>Loading...</Typography>


  return (
    <Box
      sx={{display: 'flex', flexDirection: 'column', gap: 3, }}
    >
      {activities.map(activity => (
        <ActivityCard 
          key={activity.id}
          activity={activity} 
          selectActivity={selectActivity} 
        />
      ))}
    </Box>
  )
}