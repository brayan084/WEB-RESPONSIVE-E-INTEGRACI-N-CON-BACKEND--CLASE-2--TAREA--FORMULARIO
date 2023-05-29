import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";

class Formulario extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();

        const nombre = e.target[0].value;
        const apellido = e.target[1].value;
        const Genero = e.target[2].value;
        const nivelEstudios = e.target[3].checked;
        const nivelEstudios2 = e.target[4].checked;
        const nivelEstudios3 = e.target[5].checked;
        const nivelEstudios4 = e.target[6].checked;

        console.log(nombre);
        console.log(apellido);

        if (Genero == "1") {
            console.log("Hombre");
        } else if (Genero == "2") {
            console.log("Mujer");
        }

        if (nivelEstudios4 == true) {
            console.log("Universidad completa");
        } else if (nivelEstudios3 == true) {
            console.log("Terciario completa");
        } else if (nivelEstudios2 == true) {
            console.log("Secundaria completa");
        } else if (nivelEstudios == true) {
            console.log("Primaria completa");
        }
    }



    render() {
        const mostrarAlerta = () => {
            swal("Gracias por enviar el formulario");
        }
        return (
            
            < form onSubmit = { this.handleSubmit } >
                <div>
                    <h1>Formulario de aplicaciones</h1>
                    <h2>Completa la informacion a continuacion</h2>
                </div>
                <div className="names">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Nombre" />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Apellido" />
                        <label>Apellido</label>
                    </div>
                </div>
                <div className="row">
                    <div className="Genero col-md-2">
                        <h3>Genero</h3>
                        <select className="form-select" aria-label="Default select example">
                            <option >Elige tu Genero</option>
                            <option value="1">Hombre</option>
                            <option value="2">Mujer</option>
                            <option value="3">Otro</option>
                        </select>
                    </div>
                    <div className="checkbox col-md-4">
                        <div id="1">
                            <h3>nivel de estudios</h3>
                            {/* se quito el value en los cuatro check */}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />        
                                <label className="form-check-label" >
                                    Primaria completa
                                </label>
                            </div>
                        </div>
                        <div id="2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label" >
                                    Secundaria completa
                                </label>
                            </div>
                        </div>
                        <div id="3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label" >
                                    Terciario completa
                                </label>
                            </div>
                        </div>
                        <div id="4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label" >
                                    Universidad completa
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <button onClick={mostrarAlerta} id="boton" className="btn btn-primary" type="submit">Enviar</button>


                <h3 className="h3">Muchas gracias por tu colaboracion. Recibiras la respuesta en 48 horas</h3>
            </form >
        )
    }
}

export default Formulario