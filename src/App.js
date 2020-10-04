import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';  
import data from './data';

const cursos = data;

const App =()=> {
 return( <>
   <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://i.pinimg.com/564x/c4/5e/37/c45e3755540f60cfe8c7114d36309ee2.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="#" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
{
  cursos.map(curso => 
  <Curso  
  title = {curso.title}
  image = {curso.image}
  imagecard = {curso.imagecard}
  profesor = {curso.profesor}
  price = {curso.price}
  />


  )
}
</div>

  </>)
}

export default App;
