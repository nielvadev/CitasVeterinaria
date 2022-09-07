const Paciente = ({pacientes, setPaciente, eliminarPaciente}) => {


    const {nombreMasc, nombreProp, email, telefono, alta, sintomas, id} = pacientes

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?');
        if (respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="m-3 bg-white px-5 py-10 rounded-md">
            <p className="font-bold mb-3 text-gray-800 uppercase">Nombre: {' '}
                <span className="font-normal normal-case">{nombreMasc}</span>
            </p>
            <p className="font-bold mb-3 text-gray-800 uppercase">Propietario: {' '}
                <span className="font-normal normal-case">{nombreProp}</span>
            </p>
            <p className="font-bold mb-3 text-gray-800 uppercase">Email: {' '}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-800 uppercase">Teléfono: {' '}
                <span className="font-normal normal-case">{telefono}</span>
            </p>
            <p className="font-bold mb-3 text-gray-800 uppercase">Fecha Alta: {' '}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-800 uppercase">Síntomas: {' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between">
                <button 
                    type="button" 
                    className="px-10 py-2 rounded-md  bg-green-600 hover:bg-green-800 text-white font-bold"
                    onClick={() => setPaciente(pacientes)}
                >Editar
                </button>
                
                <button 
                    type="button" 
                    className="px-10 py-2 rounded-md  bg-red-600 hover:bg-red-800 text-white font-bold"
                    onClick={handleEliminar}
                >Eliminar
                </button>
            </div>
        </div>
    )
}
export default Paciente