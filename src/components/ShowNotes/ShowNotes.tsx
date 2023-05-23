import React from 'react'
import { Box } from '@mui/material'
import List from '../List'

interface Props {
  deleteNote: any
}

export const ShowNotes = (props: Props): React.ReactElement => {
  const {
    deleteNote
  } = props
  return (
    <Box>
      <List deleteNote={deleteNote}/>
    </Box>
  )
}

export default ShowNotes
