import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./button.css"

const CreateButton = () => {
    const navigate = useNavigate()
  return (
    <button onClick={_ =>navigate('/create')} className='text-white font-bold px-10 py-2 bg-primary4 rounded-sm' id="#btn2">🎉 Create my event</button>
  )
}

export default CreateButton