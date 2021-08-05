import React, { useState,useEffect,useContext,useMemo, useCallback } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    // State to set up loading
    const [loading, setLoading] = useState(true)
    // State to set up searchTerm
    const [searchTerm, setSearchTerm] = useState('a')
    // State to store the coktails list
    const [cocktails, setCotails] = useState([])

    // Function that fetchCocktails
    // useCallback to memorize the fetchCocktails function
    const fetchCocktails =useCallback( async() => {
        setLoading(true)
        try {
            // Fetch cocktails from CocktailsDB API
            const {coktails} = await fetch(url + searchTerm).then(response => response.json())
            const {drinks} = coktails // Get the drinks from the fetched data
            // If the drinks are not empty, set the state to the list of drinks
            if (drinks) {
                // Get the useful items from the drinks
                const newCocktails = drinks.map((item) => {
                    const {
                      idDrink,
                      strDrink,
                      strDrinkThumb,
                      strAlcoholic,
                      strGlass,
                    } = item
          
                    return {
                      id: idDrink,
                      name: strDrink,
                      image: strDrinkThumb,
                      info: strAlcoholic,
                      glass: strGlass,
                    }
                })
                setCotails(newCocktails)
            } else {
                setCotails([])
            }

            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])

    // UseEffect that run fetchCocktails when the component mounts or when there is a change in the searchTerm

    useEffect(() => {
        fetchCocktails()
    }, [searchTerm, fetchCocktails])

    return (
        <AppContext.Provider 
            value={{
                loading,
                searchTerm,
                cocktails,
                setSearchTerm
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

// Use a cutstom hook to useContext
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider}