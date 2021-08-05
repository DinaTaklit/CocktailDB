import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  // Get global states
  const { cocktails, loading } = useGlobalContext()

  // If cocktails are loading, show loading
  if (loading) {
    return <Loading />
  }

  // If the list is empty, show a message
  if (cocktails.length < 1) {
    <section className="section">
      <h2 className="section-title">
        No Cocktails Found
      </h2>
    </section>
  }

  // Otherwise, show cocktail list
  return (
    <section className="section">
      <h2 className="section-title">
        Cocktails
      </h2>
      <div className="cocktails-center">
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.id} {...cocktail} />
        })}
      </div>
    </section>
  )
}

export default CocktailList