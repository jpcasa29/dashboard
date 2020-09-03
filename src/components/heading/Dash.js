import React from 'react'

const Dash = (props) => {
    
    return (
                <div className="col-md-4 mb-4">
                    <div className={props.claseA}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={props.claseB}>{props.texto}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.numero}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={props.icono}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
 
export default Dash;