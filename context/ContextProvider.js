'use client'
import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext() ;



export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [cartList, setCartList] = useState([])
  
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        activeCart,
        setActiveCart,
        cartList,
        setCartList,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}


export const useStateContext = () => useContext(StateContext)