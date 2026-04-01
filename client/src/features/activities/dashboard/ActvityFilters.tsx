import { Box, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import { VscListFilter, VscCalendar } from 'react-icons/vsc'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

export default function ActvityFilters() {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ width: '100%' }}>
          <Typography
            variant='h6'
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1,
              color: '#ff4500',
            }}
          >            
          <VscListFilter className='mr-8' />
            Filters
          </Typography>      
          <MenuList>
            <MenuItem>
              <ListItemText primary='All Events' />
            </MenuItem>
            <MenuItem>
              <ListItemText primary="I'm Going" />
            </MenuItem>
            <MenuItem>
              <ListItemText primary="I'm Hosting" />
            </MenuItem>
          </MenuList>
        </Box>
      </Paper>
      <Box 
        component={Paper}
        sx={{ p: 3}}
      >
        <Typography 
          variant='h6'
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 1,
            color: '#ff4500',            
          }}  
        >
          <VscCalendar className='mr-8' />
          Select Date
        </Typography>
        <Calendar />
      </Box>
    </Box>
  )
}