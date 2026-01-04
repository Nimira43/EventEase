export const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
      transition: 'all 0.5s ease-in-out',
    },
    '&:hover fieldset': {
      borderColor: 'teal',
      transition: 'all 0.5s ease-in-out',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'teal',
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'teal',
  },
}

export const textFieldStyles2 = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    transition: 'border-color 0.5s ease-in-out',

    '& fieldset': {
      borderColor: '#ccc',
    },

    '&:hover fieldset': {
      borderColor: 'teal',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'teal',
      borderWidth: '1px',
    },

    '&.Mui-focused': {
      boxShadow: '0 0 0 2px rgba(0, 128, 128, 0.2)',
    },
  },

  '& .MuiInputLabel-root': {
    transition: 'color 0.3s ease, transform 0.3s ease',
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: 'teal',
  },

  '& input': {
    color: '#333',
  },
}

