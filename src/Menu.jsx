import React from 'react'
import {NavLink} from 'react-router-dom'
const Menu = () =>(

<header class="ed-header s-bg-grey s-py-2">
  <div class="ed-grid lg-grid-5">
    <div class="s-cross-center s-main-center lg-main-start">
        <img class="logo" src="https://ed.team/static/images/logo.svg"/>
    </div>
    <nav class="nav lg-cols-4 s-cross-center ed-grid full">
    
      <ul class="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">

        <li class="lg-mr-3">
         <li><NavLink to={"/"} exact activeClassName="text-decoration">Inicio</NavLink></li>
         <li><NavLink to={"/cursos"} activeClassName="text-decoration">Cursos</NavLink></li>
         <li><NavLink to={"/formulario"} activeClassName="text-decoration">Formulario</NavLink></li>
        </li>
      </ul>
    </nav>
  </div>
</header>


)

export default Menu;