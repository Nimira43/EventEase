import { Grid2 } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetail from '../details/ActivityDetail'
import ActivityForm from '../form/ActivityForm'
import { useActivities } from '../../../lib/hooks/useActivities'

export default function ActivityDashboard() {
  const { activities, isPending} = useActivities()

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList 
          activities={activities} 
          selectActivity={selectActivity}
        />
      </Grid2>
      <Grid2 size={5}>        
        {selectedActivity && !editMode && 
          <ActivityDetail 
            selectedActivity={selectedActivity} 
            cancelSelectActivity={cancelSelectActivity} 
            openForm={openForm} 
          />      
        }
        {editMode &&
          <ActivityForm 
            closeForm={closeForm} 
            activity={selectedActivity}
          />
        }
      </Grid2>  
    </Grid2>
  )
}