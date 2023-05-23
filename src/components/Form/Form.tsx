import React, { useCallback, useEffect, useState } from 'react'
import { Container, TextField, Box, Typography, Button } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { Message } from '../Message'

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
          <Message
            message={'Note Added'}
            onButtonClick={closePopUp}
          />
          )
        : null
    }

    </Container>
  )
}

export default Form
