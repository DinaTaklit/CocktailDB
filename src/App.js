import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

function App() {
  /* Setup React router*/
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to='/CocktailDB/'/>
        </Route>
        <Route path="/CocktailDB/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cocktails/:id" component={SingleCocktail} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  )
}

export default App