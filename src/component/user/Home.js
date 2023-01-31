import React from 'react'
import Form from '../../Form'
import { Dashboard } from '../../pages/dashboard/Dashboard'

export const Home = () => {
  
    const getData=(data)=>{
      console.log("comming data", data);
    }
  return (
   <Dashboard>
    <Form onSubmit={getData}/>
   </Dashboard>
  )
}
