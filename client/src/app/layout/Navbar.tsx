import { Group } from '@mui/icons-material'
import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography} from '@mui/material'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar 
        position='static' 
        sx={{ backgroundColor: 'orangered'}}
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
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Activities
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                About
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Contact
              </MenuItem>
            </Box>
            <Button
              size='large'
              variant='contained'
              className='dark'
              onClick={() => {}}
            >
              Create Activity
            </Button> 
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}