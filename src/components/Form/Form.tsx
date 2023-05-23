import React, { useCallback, useEffect, useState } from 'react'
import { Container, TextField, Box, Typography, Button, Paper } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'

interface Props {
  createNote: any
}

export const Form = (props: Props): React.ReactElement => {
  const [popUp, setPopUp] = useState(false)
  const { createNote } = props
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm()

  const onSubmit = handleSubmit(
    (data, e) => {
      console.log('data', data)
      createNote(data.title, data.contents)
    },
    (errors, e) => {
      console.log('errors', errors)
    }
  )
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      setPopUp(() => true)
    }
  }, [isSubmitSuccessful, reset])

  const closePopUp = useCallback(() => {
    setPopUp(() => false)
  }, [])

  return (
    <Container>
      <Box
        textAlign={'center'}
        sx={{
          margin: '20px 0px'
        }}
      >
        <Typography
          variant={'h4'}
        >
          Create Note
        </Typography>
      </Box>
      <Box
        component={'form'}
        // ask about it
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={onSubmit}
      >
        <Controller
          control={control}
          name={'title'}
          rules={{
            required: {
              value: true,
              message: 'Title is required'
            }
          }}
          defaultValue={''}
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{
                marginBottom: '15px'
              }}
              fullWidth
              placeholder={'Title'}
              value={value}
              onChange={onChange}
              error={Boolean(errors.title)}
              id={'outlined-error'}
              helperText={(errors.title != null) ? String(errors.title.message) : ''}
            />
          )}
        />

        <Controller
          control={control}
          name={'contents'}
          rules={{
            required: {
              value: true,
              message: 'Contents is required'
            }
          }}
          defaultValue={''}
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{
                marginBottom: '15px'
              }}
              fullWidth
              placeholder={'Start Type'}
              value={value}
              onChange={onChange}
              error={Boolean(errors.contents)}
              id={'outlined-error'}
              helperText={(errors.contents != null) ? String(errors.contents.message) : ''}
            />
          )}
        />
        <Button
          type={'submit'}
          variant={'contained'}
        >
          Add Note
        </Button>
      </Box>
      {popUp
        ? (
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
              backgroundColor: 'rgba(0, 0, 0, 0.7);'
            }}
          >
            <Paper
              elevation={3}
              sx={{
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '300px',
                height: '300px'
              }}
            >
              <Typography
                variant={'subtitle1'}
                sx={{
                  marginBottom: '20px'
                }}
              >
                Note Added
              </Typography>
              <Button
                variant={'contained'}
                onClick={closePopUp}
              >
                Close
              </Button>
            </Paper >
          </Box>
          )
        : null
    }

    </Container>
  )
}

export default Form
