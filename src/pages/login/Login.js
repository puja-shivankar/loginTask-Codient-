import React from 'react'
import LoginForm from '../../component/user/LoginForm'

export const Login = (props) => {
  return (
    <LoginForm dataHandler={props.dataHandler}/>
  )
}
