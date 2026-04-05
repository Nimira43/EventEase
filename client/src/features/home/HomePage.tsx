import { Button, Paper, Typography } from '@mui/material'
import { GiAbstract058 } from 'react-icons/gi'
import { Link } from 'react-router'

export default function HomePage() {
  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#eee'
      }}
    >
      <GiAbstract058
        style={{
          height: 110,
          width: 110,
          color: '#ff4500'
        }}
      
      />

      <Typography
        style={{ color: '#ff4500'}}
        variant='h2'
        className='logo'
      >
        EventEase
      </Typography>

      <Button
        component={Link}
        to='/activities'
        size='large'
        sx={{
          height: 80,
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#fff',
          backgroundColor: '#ff4500',
          px: 6
        }}
      >
        See Activities
      </Button>
    </Paper>
  )
}
