import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()

  return (
    <button onClick={()=> navigate('/')}>Index</button>
  )
}
