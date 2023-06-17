import React, { useState } from 'react'
import BmiForm from '../BmiForm/BmiForm'
import "./BMI.css"

const BMI = () => {
    const [showMessage,setShowMessage]=useState(false)
    const [message,setMessage]=useState("")
    const onShowMessageHandler=(msg)=>{
        setShowMessage(msg)
    }
    const onMessageHandler=(msgStatus)=>{
        setMessage(msgStatus)
    }
  return (
    <>
        <BmiForm 
        onShowMessageHandler={onShowMessageHandler}
        onMessageHandler={onMessageHandler}
        />
        {showMessage && (
            <div className='row'>
                <div className='col-md'>
                    <p className="text-center text-danger my-5">Error:{message}</p>
                </div>
            </div>
        )}
    </>
  )
}

export default BMI