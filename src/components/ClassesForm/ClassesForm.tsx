import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useForm } from 'react-hook-form'
import { chooseClassDay, chooseClassName, chooseClassTime } from '../../redux/slices/RootSlice'
import { Input } from '../SharedComponents/Input'
import { Button } from '@material-ui/core'
import { server_calls } from '../../api'

interface ClassesFormProps {
  id?:string,
  data?:{}
}

interface ClassesState {
  name: string;
  email: string;
  address: string;
  phone_number: string
}

export const ClassesForm = (props:ClassesFormProps) => {
  const dispatch = useDispatch();
  const store = useStore();
  const name = useSelector<ClassesState>(state => state.name)
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data)
      console.log(`Updated ${data} ${props.id}`)
      console.log(data)
      setTimeout( () => {window.location.reload()}, 1000)
      event.target.reset()
    } else {
      dispatch(chooseClassDay(data.class_day))
      dispatch(chooseClassName(data.class_name))
      dispatch(chooseClassTime(data.class_time))
      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Class Name</label>
          <input {...register('class_name')} name='class_name' placeholder='Class Name' />
        </div>
        <div>
          <label htmlFor="phone_number">Class Day</label>
          <input {...register('class_day')} name='class_day' placeholder='Class Day' />
        </div>
        <div>
          <label htmlFor="address">Class Time</label>
          <input {...register('class_time')} name='class_time' placeholder='Class Time' />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}