import React,{useEffect, useState}  from 'react'
import Add from './Add/add'
import List from './List/List'
import './ToDo.css'

import ContextApi from '../../contextApi/ContextApi'
function ToDo() {
  // const input = document.querySelector("input")
  // const [inputv, setInputV] = useState('');

  // const handleChange = (e) => {
  //   setInputV(e.target.value);
  // };

  // console.log(inputv);
  const allData = [
    {id:1,title:"buy cookies"},
    {id:2,title:"Home"},
    {id:2,title:"the server"},
    {id:2,title:"سبسب علي ماستر"},
  ]
  //   useEffect(()=>{
    
  //     localStorage.setItem("data", JSON.stringify(allData))

  // }, [])
  
  const [data,setData] = useState(allData) 
  




  return (
    <ContextApi.Provider value={{
      
      listData:data,
      handleDelete:(index)=>{
   
        const newData = [...data];
        
        newData.splice(index, 1);
      
        setData(newData)
        console.log(newData)
       
     
       },
       sendData:(theData)=>{
        console.log(theData)
        setData(prevData=>{
          return [...prevData, theData]
        })
      
      },}}>
    <div className='container'>
        <div>   
         <section className='head-content'>
             <h1 className='title'>To do List</h1> 
             <p>App is help you to add tasks to do </p> 
         </section>
        <Add></Add>
        <List></List>
        </div>
    </div>
    </ContextApi.Provider>
  )
}

export default ToDo