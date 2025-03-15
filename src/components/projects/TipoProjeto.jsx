// src/components/TipoProjeto.jsx
import { MdAgriculture } from 'react-icons/md';
import { GiCow } from 'react-icons/gi';

function TipoProjeto({ handleCheckboxChange, tipoProjeto }) {
  return (
    <div className="w-full h-auto bg-white flex flex-col items-center p-2 lg:max-w-[800px] border border-teal-950 rounded-xl">
      <h2 className="text-xl text-green-600">Tipo do projeto</h2>
      <div className="flex gap-4">
        <button
          className={`w-32 h-10 border border-green-600 rounded-lg flex items-center justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500 ${
            tipoProjeto === 'Agrícola' ? 'bg-green-600 text-white' : ''
          }`}
          onClick={() => handleCheckboxChange('tipoProjeto', 'Agrícola')}
        >
          <MdAgriculture className="w-5 h-5" />
          Agrícola
        </button>
        <button
          className={`w-32 h-10 border border-green-600 rounded-lg flex items-center justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500 ${
            tipoProjeto === 'Pecuário' ? 'bg-green-600 text-white' : ''
          }`}
          onClick={() => handleCheckboxChange('tipoProjeto', 'Pecuário')}
        >
          <GiCow className="w-6 h-6" />
          Pecuário
        </button>
      </div>
    </div>
  );
}

export default TipoProjeto;