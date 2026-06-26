import { SearchOff } from '@mui/icons-material'
import { Button, Paper, Typography, Box } from '@mui/material'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 10,
        px: 2
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          width: '100%',
          p: 5,
          textAlign: 'center',
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3
        }}
      >
        <SearchOff sx={{ fontSize: 90, color: 'orangered' }} />

        <Typography variant='h4' fontWeight={600}>
          Page Not Found
        </Typography>

        <Typography variant='body1' sx={{ opacity: 0.8 }}>
          Sorry — we couldn't find the page you were looking for.
        </Typography>

        <Button
          fullWidth
          component={Link}
          to='/activities'
          sx={{
            fontSize: 20,
            py: 1.5,
            backgroundColor: '#ff4500',
            '&:hover': { opacity: 0.85 },
            color: '#fff',
            borderRadius: 2
          }}
          className='hover-transition'
        >
          Return to Activities
        </Button>
      </Paper>
    </Box>
  )
}
