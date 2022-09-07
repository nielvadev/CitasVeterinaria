import {useState, useEffect} from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Navegador  from "./components/Navegador"

function App() {
    const iniciar = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    const [pacientes, setPacientes] = useState(iniciar)
    const [paciente, setPaciente] = useState({})


    //Almacenamiento Local Storage ↓
    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
        console.log(pacientes)
    }, [pacientes])



    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
        setPacientes(pacientesActualizados);
    }

    return (
        <>
            <div>
                <Navegador />
            </div>

            <div className="container mx-auto mt-1"> 
                <Header />
                <div className="mt-12 md:flex">
                    <Formulario 
                        pacientes = {pacientes}
                        setPacientes={setPacientes}
                        paciente = {paciente}
                        setPaciente={setPaciente}
                    />
                    <ListadoPacientes 
                        pacientes = {pacientes}
                        setPaciente = {setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                </div>
                
            </div>
        </>
    )
}

export default App
