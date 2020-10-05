import React from 'react'
import data from './data'
const cursos = data;

const CursoId = ({match}) =>{
    const cursoActual = cursos.filter(c=> c.id=== parseInt(match.params.id))[0]
    return (
        
            cursoActual ? 
        <>
            <article className="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
              <img src={cursoActual.imagecard} alt=""/>
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            {cursoActual.title}
            </h3>
            <div className="s-mb-2 s-main-center">
              <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                  <div className="circle img-container">
                    <img src={cursoActual.image} alt={cursoActual.title}/>
                  </div>
                </div>
            <span className="small">{cursoActual.profesor}</span>
              </div>
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#"> {'$'+cursoActual.price}</a>
            </div>
        </div>
        </article>
        </>
        :
        <h1>Curso no existe</h1>
      
    )
}

export default CursoId