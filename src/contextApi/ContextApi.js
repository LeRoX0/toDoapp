import React from 'react'

const ContextApi = React.createContext({
    sendData:()=>{}, 
    handleDelete: ()=>{},
    listData: {},
})

export default ContextApi
