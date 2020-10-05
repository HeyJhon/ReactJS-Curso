import React from 'react'
import Curso from './Curso';  
import data from './data';

const cursos = data;
const CursoGrid = () =>(
<div className="ed-grid m-grid-3">
    {cursos.map(c=> 
        <Curso
        id = {c.id}
        title = {c.title}
        price = {c.price}
        profesor = {c.profesor}
        image = {c.image}
        imagecard = {c.imagecard}/>
    )}
    </div>
)

export default CursoGrid;