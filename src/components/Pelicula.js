import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Pelicula extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pelicula: ""
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
    }

    mostrarPelicula = (data) => {
        
        console.log(data.length)
        this.setState(
            {
                pelicula: data.length
            }
        )
    }

    componentDidMount() {
        console.log('me monte')
        this.apiCall('http://localhost:3001/api/buscador', this.mostrarPelicula)
    }

    componentDidUpdate() {
        console.log('nueva peli!')
        
    }

    render() {

        let contenido;
        if(this.state.pelicula == "") {
            contenido = "cargado..."
        } else {
            contenido = <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.pelicula}</div>
            
        }
    return (
                <div className="col-md-4 mb-4">
                    <div className='card border-left-primary shadow h-100 py-2'>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>Peliculas en API</div>
                                    { contenido }
                                </div>
                                <div className="col-auto">
                                    <i className='fas fa-clipboard-list fa-2x text-gray-300'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
    }
}
 
export default Pelicula;