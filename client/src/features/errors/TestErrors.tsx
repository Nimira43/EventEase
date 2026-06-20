import { Button, ButtonGroup, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query' 
import agent from '../../lib/api/agent.ts' 
import {useState} from 'react' 

export default function TestErrors() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]) 
  
  const { mutate } = useMutation({
    mutationFn: async ({
      path,
      method = 'get'
    }: {
      path: string
      method: string
    }) => {
      if (method === 'post') await agent.post(path, {}) 
      else await agent.get(path) 
    },
    onError: (err) => {
      if (Array.isArray(err)) {
          setValidationErrors(err) 
      } else {
          setValidationErrors([]) 
      }
    },
  }) 

  const handleError = (path: string, method = 'get') => {
    mutate({path, method}) 
  } 

  return (
    <>
      <Typography variant='h4'>
        Test Errors Component
      </Typography>

      <ButtonGroup
        variant='contained'
        sx={{ mt: 4 }}
      >
        <Button 
          className='main'
          onClick={
          () => handleError('buggy/not-found')
        }>
          Not Found
        </Button>
        <Button 
          className='main'
          onClick={
          () => handleError('buggy/bad-request')
        }>
          Bad Request
        </Button>
        <Button 
          className='main'
          onClick={
          () => handleError('activities', 'post')
        }>
          Validation Error
        </Button>
        <Button 
          className='main'
          onClick={
          () => handleError('buggy/server-error')
        }>
          Server Error
        </Button>
        <Button 
          className='main'
          onClick={
          () => handleError('buggy/unauthorised')
        }>
            Unauthorised
        </Button>
      </ButtonGroup>
    </>
  ) 
}
