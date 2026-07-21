import { useState } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { LocationIQSuggestion } from '../../../lib/types'
import { Box, List, ListItemButton, TextField, Typography } from '@mui/material'

type Props<T extends FieldValues> = {
  label: string
} & UseControllerProps<T>

export default function LocationInput<T extends FieldValues>(props: Props<T>) {
  const { field, fieldState } = useController({ ...props })
  const [loading, setLoasding] = useState(false)
  const [suggestions, setSuggestions] = useState<LocationIQSuggestion[]>([])

  // Place here the locationUrl code 

  return (
    <Box>
      <TextField
        {...props}
        {...field}
        fullWidth
        variant='outlined'
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
      {loading && <Typography>Loading...</Typography>}
      {suggestions.length > 0 && (
        <List sx={{ border: 1 }}>
          {suggestions.map(suggestion => (
            <ListItemButton
              divider
              key={suggestion.place_id}
              onClick={() => {}}
            >
              {suggestion.display_name}
            </ListItemButton>
          ))}
        </List>
      )}
    </Box>
  )
}