// src/components/TipoProjetoTecnico.jsx

function TipoProjetoTecnico({ handleCheckboxChange, tipoProjetoTecnico }) {
  return (
    <div className="w-full h-auto bg-white flex flex-col items-center p-2 lg:max-w-[800px] border border-teal-950 rounded-xl">
      <h1 className="text-xl text-green-600">Tipos de projeto técnico</h1>
      <div className="flex gap-4">
        <button
          className={`w-32 h-10 border border-green-600 rounded-lg flex items-center justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500 ${
            tipoProjetoTecnico === 'Custeio' ? 'bg-green-600 text-white' : ''
          }`}
          onClick={() => handleCheckboxChange('tipoProjetoTecnico', 'Custeio')}
        >
          Custeio
        </button>
        <button
          className={`w-32 h-10 border border-green-600 rounded-lg flex items-center justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500 ${
            tipoProjetoTecnico === 'Investimento' ? 'bg-green-600 text-white' : ''
          }`}
          onClick={() => handleCheckboxChange('tipoProjetoTecnico', 'Investimento')}
        >
          Investimento
        </button>
      </div>
    </div>
  );
}

export default TipoProjetoTecnico;