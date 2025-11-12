import { Grid2 } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetail from '../details/ActivityDetail'
import ActivityForm from '../form/ActivityForm'

export default function ActivityDashboard() {
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