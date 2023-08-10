import React, { useState } from 'react';


const InputElement = () =>{
    const [inpuText, setInputtext] = useState('');
    const [historyList, setHistoryList] = useState([]);
  const  onChange = (e) =>{
        setInputtext(e.target.value);
        setHistoryList([...historyList, e.target.value])
    };

    return( 
        
    <div>
    <input
    onChange={onChange}
     placeholder="Enter Some text"/><br/>
     {inpuText}
     <hr /><br/>
     <ul>
        {historyList.map((list)=>{
            return <div>{list}</div>
        })}
     </ul>
     
     </div>
     
    
    )

}
export default InputElement;