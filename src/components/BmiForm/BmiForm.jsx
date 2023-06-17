import React,{useState} from 'react'
import "./BmiForm.css"

const BmiForm = (props) => {
    const [weight,setWeight]=useState("")
    const [height,setHeight]=useState("")
    const [message,setMessage]=useState("")
    const [BMI,setBMI]=useState("")
    const [value,setValue]=useState("")
    const onWeightChangeHandler=(event)=>{
        setWeight(event.target.value);
    }
    const onHeightChangeHandler=(event)=>{
        setHeight(event.target.value);
    }
    const generateBMI=()=>{
        const bmiValue=weight/((height*height)/10000)
        setValue(bmiValue.toFixed(2))
        return bmiValue
    }
    const onGenerateBmiHandler=()=>{
        const bmi=generateBMI()
        if(bmi<18.5){
            setMessage("Under Weight")
        }
        else if(bmi>=18.5 && bmi<25){
            setMessage("Normal")
        }
        else if(bmi>=25 && bmi<30){
            setMessage("Over Weight")
        }
        else if(bmi>=30){
            setMessage("Obese")
        }
    }
    const onClearForm=()=>{
        setWeight("")
        setHeight("")
    }
    const onGenerateHandler=()=>{
        if(weight && height)
        {
            onGenerateBmiHandler()
            props.onShowMessageHandler(false)
            setBMI(true)
            setWeight("")
            setHeight("")
        }
        else if(!weight && height)
        {
            setBMI(false)
            props.onShowMessageHandler(true)
            props.onMessageHandler("Weight is required")
        }
        else if(weight && !height)
        {
            setBMI(false)
            props.onShowMessageHandler(true)
            props.onMessageHandler("Height is required")
        }
        else
        {
            setBMI(false)
            props.onShowMessageHandler(true)
            props.onMessageHandler("Weight and Height is required")
        }
    }
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md'>
                    <div className="input-group mb-3">
                        <span className="input-group-text my-4" id="basic-addon1">Weight</span>
                        <input type="number" className="form-control my-4" placeholder="Enter Weight (in kg)" aria-label="Enter Weight (in kg)" aria-describedby="basic-addon1"
                        onChange={(event)=>onWeightChangeHandler(event)}
                        value={weight}
                        ></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Height</span>
                        <input type="number" className="form-control" placeholder="Enter Height (in cm)" aria-label="Enter Height (in cm)" aria-describedby="basic-addon1" 
                        onChange={(event)=>onHeightChangeHandler(event)}
                        value={height}
                        ></input>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                <button type="button" className="btn btn-dark" onClick={onGenerateHandler}>Generate BMI</button>
                </div>
                <div className="col-md">
                <button type="button" className="btn btn-dark" onClick={onClearForm}>Clear Form</button>
                
                </div>
            </div>
        </div>
        {BMI && (<div className='container' onClick={onGenerateHandler}>
            <div className='row'>
                <div className='col'>
                    <p className='text-center my-3'><b>BMI:{value}</b></p>
                    <p className='text-center'><b>{message}</b></p>
                </div>
            </div>
        </div>)}
    </>
  )
}

export default BmiForm