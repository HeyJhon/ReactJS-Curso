import React, { Component } from 'react'

export default class Formulario extends Component{
    
    constructor(props){
        super(props)

        this.state={
            nombre: "",
            email:""
        }

        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarEmail = this.cambiarEmail.bind(this);
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    render(){
        return (
            <div className="ed-grid">                
                 <h1>Formulario</h1>
                    <form>
                        <div className="ed-grid m-grid-2">                        
                            <div className="form__item">
                                <label>Nombre de usuario</label>
                                <input type="text" 
                                onChange={this.cambiarNombre}/>
                            </div>

                            <div className="form__item">
                                <label>Correo Electronico</label>
                                <input type="email"  
                                onChange={this.cambiarEmail}/>
                            </div>

                            {/* <div className="form__item">                  
                                <input type="submit" className="button full" value="Enviar"/>
                            </div>                     */}
                        </div>
                    </form>                
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu email es: ${this.state.email}`}</span>
                </div>

                </div>
        )
    }

    componentDidMount(){
        console.log("Componente renderizado y listo");
    }

    componentDidUpdate(prevPros,prevState)
    {
        console.log("Componente actualizado");
        console.log(prevPros);
        console.log(prevState);
    }



}