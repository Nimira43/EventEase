import { CalendarToday, Info, Place } from '@mui/icons-material'
import { Divider, Grid2, Paper, Typography } from '@mui/material'

export default function ActivityDetailsInfo() {
  return (
    <Paper sx={{ mb: 2 }}>
      <Grid2
        container
        alignItems='center'
        pl={2}
        py={1}
      >
        <Grid2 size={1}>
          <Info
            fontSize='large'
            sx={{ color: '#ff4500' }}
          />
        </Grid2>
        <Grid2 size={11}>
          <Typography>
            Activity Description
          </Typography>
        </Grid2>
      </Grid2>
      <Divider />
      <Grid2
        container
        alignItems='center'
        pl={2}
        py={1}
      >
        <Grid2 size={1}>
          <CalendarToday
            fontSize='large'
            sx={{ color: '#ff4500' }}
          />
        </Grid2>
        <Grid2 size={11}>
          <Typography>
            17 February 2026 at 13:40
          </Typography>
        </Grid2>
      </Grid2>
      <Divider />
      <Grid2
        container
        alignItems='center'
        pl={2}
        py={1}
      >
        <Grid2 size={1}>
          <Place
            fontSize='large'
            sx={{ color: '#ff4500' }}
          />
        </Grid2>
        <Grid2 size={11}>
          <Typography>
              Venue, City
          </Typography>
        </Grid2>
      </Grid2>
    </Paper>
  )
}
