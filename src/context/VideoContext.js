

import React, { createContext, useState } from 'react'

const Context = createContext({});


export const VideoContextProvider = ({children}) => {

    const [isOpen, setOpen] = useState(false);

    const openModal = () =>{
        setOpen(true)
    }

    const closeModal = () =>{
        setOpen(false)
    }


  return (
    <Context.Provider  value={{ isOpen, openModal, closeModal }} >
        {children}
    </Context.Provider>
  )
}


export default Context;
