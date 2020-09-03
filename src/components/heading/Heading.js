import React from 'react'
import Dash from './Dash'

const Heading = () => {

    const tarjetas = [
		
		{
            claseA: 'card border-left-primary shadow h-100 py-2',
            claseB: 'text-xs font-weight-bold text-primary text-uppercase mb-1',
            texto: ' Products in Data Base',
            numero: '135',
            icono: 'fas fa-clipboard-list fa-2x text-gray-300'
            
		},
		{
            claseA: 'card border-left-success shadow h-100 py-2',
            claseB: 'text-xs font-weight-bold text-primary text-uppercase mb-1',
            texto: ' Amount in products',
            numero: '$546.456',
            icono: 'fas fa-dollar-sign fa-2x text-gray-300'
            
		},
		{
            claseA: 'card border-left-warning shadow h-100 py-2',
            claseB: 'text-xs font-weight-bold text-warning text-uppercase mb-1',
            texto: 'Users quantity',
            numero: '38',
            icono: 'fas fa-user-check fa-2x text-gray-300'
            
		}
	]

    return (
    
            <div className="row">

                    {
				        tarjetas.map((tarjeta, i) => {
					        return (
						        <Dash
                                    key={i}
                                    claseA={tarjeta.claseA}
                                    claseB={tarjeta.claseB}
                                    texto={tarjeta.texto}
                                    numero={tarjeta.numero}
                                    icono={tarjeta.icono}
						            
						        />
					        )
				        })
			        }

            </div>

)
}

export default Heading