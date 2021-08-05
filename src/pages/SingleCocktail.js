import React, {useState} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  // Get the cocktail id from the URL
  const { id } = useParams()

  // Loading state while searching for the cocktail item
  const [loading, setLoading] = useState(false)

  // Cocktail state to store the cocktail item
  const [cocktail, setCocktail] = useState(null)

  // Laoading 
  if (loading){
    return <Loading />
  }
  // if the cocktail is not found, display a message
  if (!cocktail){
    return (
      <section className="section">
        <h2 className="section-title">Cocktail not found</h2>
      </section>
    )
  } else {
    // if the cocktail is not null, then render it

    // Destructure the keys from the cocktail
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail

    return (
      <div>
        <section className="section cocktail-section"> 
          <Link to={`/`} className="btn btn-primary">Back home</Link>
          <h2 className="section-title">
            {name}
          </h2>
          <div className="drink">
            <img src={image} alt={name} />
          </div>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </section>
      </div>
    )
  } 
}

export default SingleCocktail