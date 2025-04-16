
import React from 'react'
import Button from './Button'

interface User {
  id:number,
  name:string
}

export default async function User() {
  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  const users:User[]=await res.json()
 
  return (
    <div>
      <h1 className='p-5 bg-amber-200 w-3xl hover:bg-sky-400'>Hello Users</h1>
      <ul>
        {users.map((user)=>(
         <li key={user.id}>{user.name}</li>
        ))}
      </ul>
     <Button></Button>
    </div>
  )
}
