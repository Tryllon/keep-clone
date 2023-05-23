import React from 'react'
import { Box, Container, Typography, Paper } from '@mui/material'
import { yellow } from '@mui/material/colors'

interface Props {
  title: string
  contents: string
}

export const ListItem = (props: Props): React.ReactElement => {
  const {
    title,
    contents
  } = props

  return (
    <Container >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: yellow[300],
          padding: '10px',
          margin: '15px 0px'
        }}
      >
        <Box>
          <Typography
            variant={'h6'}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant={'subtitle1'}
          >
            {contents}
          </Typography>
        </Box>
      </Paper>

    </Container>
  )
}

export default ListItem
