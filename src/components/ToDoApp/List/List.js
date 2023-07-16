import React, {useContext, useState} from 'react'
import './list.css'
import Do from './listsToDo'
import ContextApi from '../../../contextApi/ContextApi'
function List(props) {
  const ctx = useContext(ContextApi)
  return (
    <div className='list-container'>
         <div className='toDos'>
              <Do handleDelete={ctx.handleDelete} theData={props.data}></Do>
         </div>
    </div>
  )
}

export default List
