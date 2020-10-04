import React from 'react'
import './styles/styles.scss';
//import Curso from './Curso';  
//import data from './data';
import Banner from './Banner'
import Formulario from './Formulario'
//const cursos = data;

const App =()=> {
 return( <>
<Banner/>
<Formulario nombre="juan" email="hola@hotmail.com"/>

  </>)
}

export default App;
