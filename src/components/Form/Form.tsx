import React from 'react'
import { Container, TextField, Box, Typography, Button } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
// import { useAppContext } from '../../contexts/AppContext'

interface Props {
  createNote: any
}

export const Form = (props: Props): React.ReactElement => {
  const { createNote } = props
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()
  // const {
  //   setTitle,
  //   setContents
  // } = useAppContext()

  const onSubmit = handleSubmit(
    (data, e) => {
      console.log('data', data)
      createNote(data.title, data.contents)
    },
    (errors, e) => {
      console.log('errors', errors)
    }
  )

  return (
    <Container>
      <Box>
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

    </Container>
  )
}

export default Form
