import React, { useState,useEffect,useContext,useMemo, useCallback } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={'hello'}>
            {children}
        </AppContext.Provider>
    )
}

// Use a cutstom hook to useContext
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider}