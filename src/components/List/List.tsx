import React from 'react'
import { Box } from '@mui/material'
import { useAppContext } from '../../contexts/AppContext'
import ListItem from '../ListItem'

interface Props {
  deleteNote: any
}

export const List = (props: Props): React.ReactElement => {
  const {
    deleteNote
  } = props
  const {
    notes
  } = useAppContext()

  return (
    <Box>
      {
      notes?.map((note: { id: string, title: string, contents: string }) => {
        const { id, title, contents } = note
        return (
          <ListItem
            key={id}
            title={title}
            contents={contents}
            deleteNote={deleteNote}
            id={id}
          />
        )
      })}
    </Box>
  )
}

export default List
