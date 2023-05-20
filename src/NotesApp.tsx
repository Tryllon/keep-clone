import React, { useEffect, useCallback } from 'react'
import loadNotes from './api/loadNotes'
import { useAppContext } from './contexts/AppContext'

function NotesApp (): React.ReactElement {
  // const [isLoading, setIsLoading] = useState(false)
  // const [hasError, setHasError] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')
  // const [notes, setNotes] = useState([])

  const {
    isLoading,
    setIsLoading,
    hasError,
    setHasError,
    errorMessage,
    setErrorMessage,
    notes,
    setNotes
  } = useAppContext()

  const fetchNotes = useCallback(async () => {
    setIsLoading(() => true)
    try {
      const notes = await loadNotes()
      setNotes(notes)
      console.log(notes)
    } catch (error) {
      setHasError(() => true)
      setErrorMessage('error')
      console.log(error)
    } finally {
      setIsLoading(() => false)
    }
  }, [])

  useEffect(() => {
    void fetchNotes()
  }, [])

  return (
    <div>
      {
        isLoading
          ? (
            <div>
              Loading...
            </div>
            )
          : null
      }
      {
        hasError
          ? (
            <div>
              {errorMessage}
            </div>
            )
          : null
      }
      {
        (notes.length === 0)
          ? (
            <div>
              No data
            </div>
            )
          : null
      }
      {
      notes?.map((note: { id: string, title: string, contents: string }) => {
        return (
          <div
            key={note.id}
          >
            {note.contents}
          </div>
        )
      })}

    </div>
  )
}

export default NotesApp
