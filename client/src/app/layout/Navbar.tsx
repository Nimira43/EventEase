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
        <Container maxWidth='xl'>
          <Toolbar 
            sx={{ 
              display: 'flex', justifyContent: 'space-between'
            }}
          >
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}