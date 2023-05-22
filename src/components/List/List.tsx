import React from 'react'
import { Box } from '@mui/material'
import { useAppContext } from '../../contexts/AppContext'
import ListItem from '../ListItem'

export const List = (): React.ReactElement => {
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
          />
        )
      })}
    </Box>
  )
}

export default List
