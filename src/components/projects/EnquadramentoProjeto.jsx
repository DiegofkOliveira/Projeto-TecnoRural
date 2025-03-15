// src/components/EnquadramentoProjeto.jsx
function EnquadramentoProjeto({ handleCheckboxChange, enquadramentoProjeto }) {
    return (
      <div className="w-full h-auto bg-white flex flex-col items-center p-2 lg:max-w-[800px] border border-teal-950 rounded-xl">
        <h2 className="text-xl text-green-600">Enquadramento do projeto</h2>
        <div className="flex gap-4">
          <button
            className={`w-24 h-10 border border-green-600 rounded-lg flex items-center justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500 md:w-32 ${
              enquadramentoProjeto === 'Pronaf' ? 'bg-green-600 text-white' : ''
            }`}
            onClick={() => handleCheckboxChange('enquadramentoProjeto', 'Pronaf')}
          >
            Pronaf
          </button>
          <button
            className={`w-24 h-10 border border-green-600 rounded-lg flex items-center justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500 md:w-32 ${
              enquadramentoProjeto === 'Pronamp' ? 'bg-green-600 text-white' : ''
            }`}
            onClick={() => handleCheckboxChange('enquadramentoProjeto', 'Pronamp')}
          >
            Pronamp
          </button>
          <button
            className={`w-40 h-10 border border-green-600 rounded-lg flex items-center justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500 ${
              enquadramentoProjeto === 'Demais Produtores' ? 'bg-green-600 text-white' : ''
            }`}
            onClick={() => handleCheckboxChange('enquadramentoProjeto', 'Demais Produtores')}
          >
            Demais Produtores
          </button>
        </div>
      </div>
    );
  }
  
  export default EnquadramentoProjeto;