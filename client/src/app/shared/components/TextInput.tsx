import { TextField, TextFieldProps } from '@mui/material'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { textFieldStyles } from '../../../utils/textFieldStyles'

type Props<T extends FieldValues> = {} & UseControllerProps<T> & TextFieldProps

export default function TextInput<T extends FieldValues>(props: Props<T>) {
  const { field, fieldState } = useController({...props})

  return (
    <TextField
      {...props}
      {...field}
      value={field.value || ''}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      sx={textFieldStyles}
    />
  )
}