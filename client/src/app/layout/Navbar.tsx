import { Group } from '@mui/icons-material'
import { AppBar, Box, Container, MenuItem, Toolbar, Typography} from '@mui/material'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar 
        position='static' 
        sx={{ backgroundColor: 'teal'}}
      >
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem
                component={NavLink}
                to='/'
                sx={{ display: 'flex', gap: 2 }}
              >
                <Group fontSize='large' />
                <Typography
                  variant='h4'
                  fontWeight='bold'
                >
                  <span className='logo'>EventEase</span>
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <MenuItem
                component={NavLink}
                to='/activities'
                sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}
              >
                Activities
              </MenuItem>
              <MenuItem
                component={NavLink}
                to='/createActivity'
                sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}
              >
                Create Activity
              </MenuItem>
            </Box>
            <MenuItem>
              User Menu
            </MenuItem> 
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}