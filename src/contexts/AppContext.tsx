import React, { createContext, useState, useContext, type Dispatch, type SetStateAction } from 'react'

interface Notes {
  id: string
  title: string
  contents: string
}

interface UserContextInterface {
  isLoading: boolean
  hasError: boolean
  errorMessage: string
  notes: Notes[]
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setHasError: Dispatch<SetStateAction<boolean>>
  setErrorMessage: Dispatch<SetStateAction<string>>
  setNotes: Dispatch<SetStateAction<any>>
}

interface Props {
  children: React.ReactNode
}

const initialContextState: UserContextInterface = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
  notes: [],
  setIsLoading: () => {},
  setHasError: () => {},
  setErrorMessage: () => {},
  setNotes: () => {}
}

export const AppContext = createContext(initialContextState)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppContext = () => {
  const appContextValue = useContext(AppContext)
  return appContextValue
}
export const AppContextProvider = (props: Props): React.ReactElement => {
  // eslint-disable-next-line react/prop-types
  const { children } = props

  const [isLoading, setIsLoading] = useState(initialContextState.isLoading)
  const [hasError, setHasError] = useState(initialContextState.hasError)
  const [errorMessage, setErrorMessage] = useState(initialContextState.errorMessage)
  const [notes, setNotes] = useState(initialContextState.notes)

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        hasError,
        setHasError,
        errorMessage,
        setErrorMessage,
        notes,
        setNotes
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppContextProvider
