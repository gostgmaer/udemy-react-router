import React from 'react'
import { useNavigate } from 'react-router'

const Error = () => {
    const navigate = useNavigate()
    const navigateFunctions = (second) => { 
        console.log(second);
        navigate('/')
     }
  return (
    <div>Error


        <button onClick={navigateFunctions} type="button" className="close"   aria-label="Close">
        Navigate
        </button>
    </div>
  )
}

export default Error