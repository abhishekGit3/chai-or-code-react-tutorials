import React from 'react'
import { useSelector } from 'react-redux'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({children , authentication}) {
    const navigate = useNavigate();
    const [loader , setLoader] = useState("");

    const authStatus = useSelector((state) => state.auth.status)

    useEffect(()=>{

    },[ authStatus , authentication , navigate ])

  return (
    <div>
      
    </div>
  )
}

export default Protected
