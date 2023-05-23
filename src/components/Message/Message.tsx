import React from 'react'
import { Box, Paper, Typography, Button } from '@mui/material'

interface Props {
  message: string
  onButtonClick: any
}

export const Message = (props: Props): React.ReactElement => {
  const {
    message,
    onButtonClick
  } = props

  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.7);'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '300px',
          height: '300px'
        }}
      >
        <Typography
          variant={'subtitle1'}
          sx={{
            marginBottom: '20px'
          }}
        >
          {message}
        </Typography>
        <Button
          variant={'contained'}
          onClick={onButtonClick}
        >
          Close
        </Button>
      </Paper >
    </Box>
  )
}

export default Message
