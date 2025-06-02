import { Menu } from '@mui/icons-material'
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar 
        position='static' 
        sx={{ 
          backgroundColor: 'orangered'
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{mr: 2}}
            >
              <Menu />
            </IconButton>
            <Typography 
              variant='h6'
              component='div'
              sx={{flexGrow: 1}}
            >
              EventEase
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </Container>
        
      </AppBar>

    </Box>
  )
}