import { useReducer, useState } from "react";
import useInterval from "./useInterval";

const useEmailValidation =(seconds) =>{
    const validateEmail = (email)=>{
        //const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}))/;
        const re =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
    };
    const [emailValid, setEmailalid] = useState(false);
    const emailReducer = (state, action) =>{
        const isValidEmail =validateEmail(action);
        setEmailalid(isValidEmail);
        return action;
    }
    const [email, setEmail] = useReducer(emailReducer, "");
    const maxseconds = seconds;
    const [count, setCount] = useState(maxseconds)

    useInterval(()=>{
        setCount(count-1)
    }, 1000);
    const retObject = {setEmail, count, email, emailValid, setCount}
    return retObject;
    }

    export default useEmailValidation;