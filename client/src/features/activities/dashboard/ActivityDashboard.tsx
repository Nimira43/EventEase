import { Grid2 } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetail from '../details/ActivityDetail'

type Props = {
  activities: Activity[]
  selectActivity: (id: string) => void
  cancelSelectActivity: () => void
  selectedActivity?: Activity
}

export default function ActivityDashboard({
  activities,
  cancelSelectActivity,
  selectActivity,
  selectedActivity

}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList 
          activities={activities} 
          selectedActivity={selectActivity}
            
        />
      </Grid2>
      <Grid2 size={5}>        
        {activities[0] && <ActivityDetail activity={activities[0]} />}
      </Grid2>
    </Grid2>
  )
}