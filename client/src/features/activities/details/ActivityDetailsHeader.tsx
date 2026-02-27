import { Card, Badge, CardMedia, Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ActivityDetailsHeader() {
  const isCancelled = false
  const isHost = true
  const isGoing = true
  const loading = false

  return (
    <Card sx={{ position: 'relative', mb: 2, backgroundColor: 'transparent', overflow: 'hidden' }}>
      {isCancelled && (
        <Badge
          sx={{ position: 'absolute', left: 40, top: 20, zIndex: 1000 }}
          color='error'
          badgeContent='Cancelled'
        />
      )}
      <CardMedia
        component='img'
        height='300'
        image={`/images/categoryImages/travel.jpg`}
        alt={'travel image'}
      />
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        color: 'white',
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 1.0), transparent)',
        boxSizing: 'border-box',
      }}>
        <Box>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            Activity Title
          </Typography>
          <Typography variant='subtitle1'>
            17 February 2026 at 13:40
          </Typography>
          <Typography variant='subtitle2'>
            <span>
              Hosted by{' '}
              <Link to={`/profiles/username`} style={{ color: 'white', fontWeight: 'bold' }}>
                Bob
              </Link>              
            </span>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {isHost ? (
            <>
              <Button
                variant='contained'
                onClick={() => {}}
                sx={{
                  backgroundColor: isCancelled ? '#00ff00' : '#ff0000',
                  '&:hover': {
                    backgroundColor: isCancelled ? '#00cc00' : '#cc0000'
                  }
                }}
              >
                {isCancelled ? 'Re-activate Activity' : 'Cancel Activity'}
              </Button>

              <Button
                variant='contained'
                color='primary'
                component={Link}
                to={`/manage/activityId`}
                disabled={isCancelled}
              >
                Manage Event
              </Button>
            </>
          ) : (
            <Button
              variant='contained'
              onClick={() => {}}
              disabled={isCancelled || loading}
              sx={{
                backgroundColor: isGoing ? '#0000ff' : '#00bfff',
                '&:hover': {
                  backgroundColor: isGoing ? '#0000cc' : '#0099cc'
                }
              }}
            >
              {isGoing ? 'Cancel Attendance' : 'Join Activity'}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  )
}