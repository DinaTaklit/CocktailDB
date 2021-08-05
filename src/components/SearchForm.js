import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input 
            type="text" 
            id="name"
            name="name"
          />
        </div>
      </form>  
    </section>
  )
}

export default SearchForm