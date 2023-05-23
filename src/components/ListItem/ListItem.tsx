import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
// import theme from '../../theme'

interface Props {
  title: string
  contents: string
  deleteNote: any
  id: string
}

export const ListItem = (props: Props): React.ReactElement => {
  const {
    title,
    contents,
    deleteNote,
    id
  } = props

  return (
    <Container>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant={'h6'}
          >
            {title}
          </Typography>
          <Button
            variant={'contained'}
            size={'small'}
            onClick={() => deleteNote(id)}
          >
            Delete
          </Button>
        </Box>
        <Box>
          <Typography
            variant={'subtitle1'}
          >
            {contents}
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default ListItem
