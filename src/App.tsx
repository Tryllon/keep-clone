import React from 'react'
import './App.css'
import NotesApp from './NotesApp'
import AppContextProvider from './contexts/AppContext'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

function App (): React.ReactElement {
  return (
    <div>
      <ThemeProvider
        theme={theme}
      >
        <AppContextProvider>
          <NotesApp/>
        </AppContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
