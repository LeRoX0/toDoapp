import React,{useState , useEffect, useContext} from 'react'
import ContextApi from '../../../contextApi/ContextApi';

function Do() {
  const ctx = useContext(ContextApi)

  return (
    <div>
      {ctx.listData.map((data,index) => (
        <section key={index} className='todo-section'>
          <h1>{data.title}</h1>
          
          <button onClick={()=>ctx.handleDelete(index)} className='delete'>Delete</button>
        </section>
      ))}
    </div>
  )
}

export default Do;
