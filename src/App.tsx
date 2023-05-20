import React from 'react'
import './App.css'
import NotesApp from './NotesApp'
import AppContextProvider from './contexts/AppContext'

function App (): React.ReactElement {
  return (
    <div>
      <AppContextProvider>
        <NotesApp/>
      </AppContextProvider>
    </div>
  )
}

export default App
