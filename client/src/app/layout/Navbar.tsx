import FlareIcon from '@mui/icons-material/Flare'
import { AppBar, Box, Container, MenuItem, Toolbar, Typography} from '@mui/material'
import { NavLink } from 'react-router'
import MenuItemLink from '../shared/components/MenuItemLink'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar 
        position='static' 
        sx={{ backgroundColor: 'teal'}}
      >
        <Container maxWidth='xl'>
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Box>
              <MenuItem
                component={NavLink}
                to='/'
                sx={{
                  display: 'flex',
                  gap: 1,
                  alignItems: 'center'
                }}
              >
                <FlareIcon
                  fontSize="large"
                  sx={{
                    position: 'relative',
                    top: '-2px'
                  }} />

                <Typography
                  variant='h4'
                  fontWeight='bold'
                >
                  <span className='logo'>EventEase</span>
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <MenuItemLink to='/activities'>
                Activities
              </MenuItemLink>
              <MenuItemLink to='/createActivity'>
                Create Activity
              </MenuItemLink>
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