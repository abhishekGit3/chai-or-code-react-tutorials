import React from 'react'
import {Link} from 'react-router-dom'
import appwriteServices from '../appwrite/config'
import { Logo , LogoutBtn , Button } from './index'

function PostCard({title , featuredImage , $id}) {
  
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justifycenter mb-4'>
          <img src={appwriteServices.getFilePreview(featuredImage)} alt={title}
          className='rounded-xl'/>
        </div>

        <h2 className='text-xl font-bold'>
          {title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
