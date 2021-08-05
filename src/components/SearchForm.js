import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  // Get setSearchTerm from global context
  const {setSearchTerm} = useGlobalContext()

  //UseRef to store the search input 
  const inputRef = React.useRef(null)

  const searchCocktail = () => {
    setSearchTerm(inputRef.current.value)
  }

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input 
            type="text" 
            id="name"
            name="name"
            ref={inputRef}
            onChange={searchCocktail}
          />
        </div>
      </form>  
    </section>
  )
}

export default SearchForm