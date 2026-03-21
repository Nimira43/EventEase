import { Box, Typography, Card, CardContent, TextField, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ActivityDetailsChat() {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          bgcolor: '#ff4500',
          color: 'white',
          padding: 2
        }}
        className='weighted-text'
      >
        <Typography variant='h6'>Chat about this event</Typography>
      </Box>
      <Card>
        <CardContent>
          <div>
            <form>
              <TextField
                variant='outlined'
                fullWidth
                multiline
                rows={2}
                placeholder='Enter your comment'
              />
            </form>
          </div>

          <Box>
            <Box 
              sx={{ 
                display: 'flex', 
                my: 2 
              }}>
              <Avatar 
                src={'/images/user.png'} 
                alt={'user image'} 
                sx={{ mr: 2 }} 
              />
              <Box 
                display='flex' 
                flexDirection='column'
              >
                <Box 
                  display='flex' 
                  alignItems='center' 
                  gap={3}
                >
                  <Typography 
                    component={Link} 
                    to={`/profiles/username`} 
                    variant='subtitle2' 
                    sx={{ 
                      color: '#ff4500',
                      fontWeight: 'bold', 
                      textDecoration: 'none' 
                    }}
                  >
                    Bob
                  </Typography>
                  <Typography 
                    variant='body2' 
                    color='textSecondary'
                  >
                    2 hours ago
                  </Typography>
                </Box>
                <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                  Comment goes here
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}