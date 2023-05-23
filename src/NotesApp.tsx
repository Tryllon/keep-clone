import React, { useEffect, useCallback } from 'react'
import { loadNotes, create } from './api'
import { useAppContext } from './contexts/AppContext'
import ShowNotes from './components/ShowNotes'
import Form from './components/Form'

function NotesApp (): React.ReactElement {
  const {
    isLoading,
    setIsLoading,
    hasError,
    setHasError,
    errorMessage,
    setErrorMessage,
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
  const createNote = useCallback(async (title: string, contents: string) => {
    console.log(title, contents)
    const newNoteData = {
      id: Date.now(),
      title,
      contents
    }
    setIsLoading(() => true)
    try {
      await create(newNoteData)
    } catch (error) {
      setHasError(() => true)
      setErrorMessage('error')
      console.log(error)
    } finally {
      await fetchNotes()
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
      <Form createNote={createNote}/>
      <ShowNotes/>
    </div>
  )
}

export default NotesApp
