import React,{useContext, useState} from 'react'
import "./add.css"
import ContextApi from '../../../contextApi/ContextApi'
function Add(props) {
  const [inputValue,setInputValue] =useState("")
  const ctx = useContext(ContextApi)
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(inputValue != ""){
    var data = {
      id: Math.random(),
      title: inputValue
    }
    ctx.sendData(data)
    setInputValue("")
    }
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
          <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          
          placeholder='Add To do'
          />
          <button className='add' >Add</button>
       </form>
    </div>
  )
}

export default Add