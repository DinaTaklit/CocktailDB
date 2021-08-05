import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  // Get setSearchTerm from global context
  const {setSearchTerm} = useGlobalContext()

  //UseRef to store the search input 
  const inputRef = React.useRef(null)

  // Set the value of the search input when the user clicks the search button
  const searchCocktail = () => {
    setSearchTerm(inputRef.current.value)
  }

  // Prevent the default action after a click on the search button
  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
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