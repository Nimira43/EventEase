import { MenuItem } from '@mui/material'
import { ReactNode } from 'react'
import { NavLink } from 'react-router'

export default function MenuItemLink({
  children,
  to
}: {
  children: ReactNode
  to: string
}) {
  return (
    <MenuItem
      component={NavLink}
      to={to}
      sx={{
        fontSize: '1.2rem',
        color: 'inherit',
        '&.active': {
          color: 'black'
        }
      }}
      className='weighted-text'
    >
      {children}
    </MenuItem>
  )
}