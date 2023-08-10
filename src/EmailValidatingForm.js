import React, { useReducer, useState } from 'react'
import useInterval from './useInterval';
import useEmailValidation from './useEmailValidation';

const EmailValidatingForm = () => {
   

    const {setEmail, count, email, emailValid, setCount} = useEmailValidation(30)

  return (
    <div className='container'><br />
    <div>
        <div className='content'>
          <input 
          onChange={e => {
            setEmail(e.target.value)
          }}
          disabled={count<= 0}
          value={email}
          placeholder='Enter Email'
          />&nbsp;&nbsp;&nbsp;
        <button
        disabled={!emailValid || count<=0}
        onClick={()=>{
            setCount(0);
            alert(`button clicked with email ${email}`)
        }} className='btn-lg'
        type='submit'
        >PRESS ME!
        </button>
        <div>
            {count > 0
            ? `you have ${count} Seconds to enter your Email`
        :"Email entered or Time expired"}
            
        </div>
        </div>
    </div>


    </div>
  )
}

export default EmailValidatingForm