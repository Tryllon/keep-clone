import React from 'react'
import { Box, Container, Typography } from '@mui/material'

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
    <Container>
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
    </Container>
  )
}

export default ListItem
