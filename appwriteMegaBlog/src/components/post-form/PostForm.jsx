import RTE from '../RTE'
import {useSelector} from 'react-redux'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { useCallback , useState } from 'react'
import authService from '../../appwrite/auth'
import {Button , Input , Select , RTE} from '../index'

import React from 'react'

function PostForm({post}) {
    const {register , handleSubmit , watch ,  setValue ,
    control , getValues} = useForm({
        defaultValues: {
          title : post?.title || '',
          slug : post?.slug || '',
          content : post?.content || '',
          status : post?.status || ''
        },
    });


    

  return (
    <div>
      
    </div>
  )
}

export default PostForm
