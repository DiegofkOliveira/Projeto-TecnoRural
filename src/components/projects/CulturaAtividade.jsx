// src/components/CulturaAtividade.js
import { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';

function CulturaAtividade({ handleCheckboxChange, culturaAtividade, tipoProjeto }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const culturasAgricolas = [
    'Soja',
    'Milho',
    'Trigo',
    'Arroz',
    'Cevada',
    'Canola',
    'Aveia',
    'Feijão',
    'Girassol',
    'Sorgo',
    'Fumo',
    'Batata-inglesa',
    'Mandioca',
    'Maçã',
    'Uva',
    'Citrus',
    'Pêssego',
    'Ameixa',
  ];

  const atividadesPecuarias = [
    'Bovinocultura de Corte',
    'Bovinocultura de Leite',
    'Ovinocultura',
    'Suínocultura',
    'Avicultura',
    'Apicultura',
    'Equinocultura',
  ];

  const variedades = tipoProjeto === 'Agrícola' ? culturasAgricolas : atividadesPecuarias;

  const handleVariedadeSelect = (variedade) => {
    handleCheckboxChange('culturaAtividade', variedade);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full h-auto bg-white flex flex-col items-start p-2 lg:max-w-[800px] border border-teal-950 rounded-xl">
      <h2 className="text-xl text-green-600">
        {tipoProjeto === 'Agrícola' ? 'Cultura atividade:' : 'Atividade pecuária:'}
      </h2>
      <div className="relative w-full mt-2">
        <div
          className="flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:border-green-500 transition duration-300"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-gray-600">
            {culturaAtividade || `Selecione uma ${tipoProjeto === 'Agrícola' ? 'cultura' : 'atividade'}`}
          </span>
          <IoIosArrowDropdown
            className={`w-5 h-5 text-green-600 transition-transform duration-300 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10 max-h-60 overflow-y-auto">
            {variedades.map((variedade, index) => (
              <div
                key={index}
                className="p-3 hover:bg-green-100 cursor-pointer text-gray-700 transition duration-200"
                onClick={() => handleVariedadeSelect(variedade)}
              >
                {variedade}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CulturaAtividade;