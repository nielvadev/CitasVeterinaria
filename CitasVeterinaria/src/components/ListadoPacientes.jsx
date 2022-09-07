import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    return (  
    
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Administra tus {' '}
                        <span className="text-blue-600 font-bold">Pacientes y Citas</span>
                    </p>

                    { pacientes.map( pacientes => (
                        <Paciente 
                            key={pacientes.id}
                            pacientes={pacientes}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />     
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Agrega pacientes {' '}
                        <span className="text-blue-600 font-bold">Y aparecerán en este lugar ↓</span>
                    </p>

                    { pacientes.map( pacientes => (
                        <Paciente 
                        key={pacientes.id}
                        pacientes={pacientes}
                        setPaciente={setPaciente}
                        
                        />     
                    ))}
                </>
            )}

        </div>
    )
}

export default ListadoPacientes