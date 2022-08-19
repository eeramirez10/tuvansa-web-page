import React, { createContext, useState } from 'react';

const Context = createContext({})

export const GalleryImageContextProvider = ({children}) => {

    const [isOpen, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [ images, setImages] = useState([])

  return (
    <Context.Provider value={{ isOpen, setOpen, photoIndex, setPhotoIndex, images, setImages  }}>
        {children}
    </Context.Provider>
  )
}

export default Context;