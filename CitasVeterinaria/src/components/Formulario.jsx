function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {' '}
            <span className="text-blue-600 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-md py-10 px-5 mb-10">
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-800 uppercase font-bold">
                    Nombre Mascota
                </label>
                <input
                    id="mascota"
                    type="text"
                    className="border-2 w-full P-2 mt-2 placeholder-gray-400 rounded-sm"
                    placeholder="Nombre de la mascota"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-800 uppercase font-bold">
                    Nombre Propietario
                </label>
                <input
                    id="propietario"
                    type="text"
                    className="border-2 w-full P-2 mt-2 placeholder-gray-400 rounded-sm"
                    placeholder="Nombre del propietario"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-800 uppercase font-bold">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    className="border-2 w-full P-2 mt-2 placeholder-gray-400 rounded-sm"
                    placeholder="Email contacto"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-800 uppercase font-bold">
                    Teléfono
                </label>
                <input
                    id="telefono"
                    type="text"
                    className="border-2 w-full P-2 mt-2 placeholder-gray-400 rounded-sm"
                    placeholder="Número telefónico"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-800 uppercase font-bold">
                    Alta
                </label>
                <input
                    id="alta"
                    type="date"
                    className="border-2 w-full P-2 mt-2 placeholder-gray-400 rounded-sm"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-800 uppercase font-bold">
                    Síntomas
                </label>
                <textarea
                    id="sintomas"
                    className="border-2 w-full P-2 mt-2 placeholder-gray-400 rounded-sm"
                    placeholder="Describe los síntomas"
                />
            </div>

            <input
                type="submit"
                className=" bg-blue-600 w-full p-3 text-white uppercase font-bold 
                            hover:bg-blue-800 cursor-pointer transition-colors shadow-md"
                value="Agregar paciente"
            />
        </form>
    </div>
  )
}

export default Formulario