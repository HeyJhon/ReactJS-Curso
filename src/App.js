import React from 'react'
import './styles/styles.scss';
import Banner from './Banner'
import CursoGrid from './CursoGrid'
import Formulario from './Formulario'
import CursoId from './CursoId';
import Menu from './Menu'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App =()=> {
 return( <>

<Router>
  <Menu/>
<Switch>
  <Route path="/" exact component={Banner}/>
  <Route path="/cursos/:id"  component={CursoId}/>
  <Route path="/cursos"  component={CursoGrid}/>
  <Route path="/formulario"  component={() =><Formulario/>}/>
<Route component={() =>(
  <h1>Error 404</h1>
)}/>
</Switch>
</Router>

  </>)
}

export default App;
