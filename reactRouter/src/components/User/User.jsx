import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-white text-2xl p-4 text-center'>
      User : {userId}
    </div>
  )
}

export default User
