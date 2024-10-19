import React from 'react'
import { useState , useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container , PostForm } from '../components'
import { useParams , useNavigate } from 'react-router-dom'
function EditPosts() {
    const [post , setpost] = useState([]);
    const navigate = useNavigate();
    const {slug} = useParams();

    useEffect(() =>{
        if(slug){
           appwriteService.getPost(slug).then((post) =>{
            if(post)
                setpost(post)
           })
        }else{
            navigate('/')
        }
    }, [slug , navigate])
  return (
    <div>
      
    </div>
  )
}

export default EditPosts
