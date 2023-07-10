import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
        <header color='black'>
        <div>
          <h1 align="center">BMI CALCULATOR</h1>
        </div>
        <div>
          {/* <img src='https://www.cdc.gov/healthyweight/images/assessing/bmi-adult-fb-600x315.jpg?_=07167' alt='bmi' hspace='330'></img> */}
          <center>
          <img src="https://www.cdc.gov/healthyweight/images/assessing/bmi-adult-fb-600x315.jpg?_=07167" class="img-fluid" alt="bmi" height={320} width={320}></img>
          </center>
          
        </div>
            
        </header>
    </>
  )
}

export default Header