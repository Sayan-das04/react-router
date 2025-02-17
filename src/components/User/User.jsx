import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div
    className='text-center font-semibold text-2xl p-5 bg-gray-500'>User:{userid}</div>
  )
}

export default User