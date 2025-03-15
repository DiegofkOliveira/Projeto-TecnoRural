// src/components/Formulario.jsx
import { TbPointFilled } from 'react-icons/tb';

function Formulario({
  bancoSelecionado,
  formData,
  handleChange,
  handleFileChange,
  removeFile,
  handleTermosChange,
  handleSubmit,
  itensPorBanco,
}) {
  return (
    <div className="w-full max-w-[800px] bg-white p-6 mt-10 shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-xl font-bold text-green-600">
        {bancoSelecionado ? `Informações para ${bancoSelecionado}` : 'Preencha os dados abaixo'}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mt-4">
        <label className="group border border-gray-300 rounded-lg w-full h-16 p-2 focus-within:border-2 focus-within:border-green-500 transition duration-300">
          <span className="text-gray-600">Nome:</span>
          <input
            className="border-none outline-none w-full"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>
        <label className="group border border-gray-300 rounded-lg w-full h-16 p-2 focus-within:border-2 focus-within:border-green-500 transition duration-300">
          <span className="text-gray-600">Telefone:</span>
          <input
            className="border-none outline-none w-full"
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            pattern="\d{10,11}"
            required
          />
        </label>
        <label className="group border border-gray-300 rounded-lg w-full h-16 p-2 focus-within:border-2 focus-within:border-green-500 transition duration-300">
          <span className="text-gray-600">E-mail:</span>
          <input
            className="border-none outline-none w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span id="email-error" className="text-red-600 text-sm hidden">
            O e-mail fornecido está incorreto.
          </span>
        </label>

        <div className="w-full flex flex-col items-start mt-4 pb-8">
          <h1 className="text-lg font-semibold">Anexe os seguintes arquivos:</h1>
          <ul className="mt-2">
            {bancoSelecionado ? (
              itensPorBanco[bancoSelecionado].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <TbPointFilled className="text-green-500" />
                  {item}
                </li>
              ))
            ) : (
              <li className="text-gray-500">Selecione um banco para ver os arquivos necessários.</li>
            )}
          </ul>
        </div>

        <div className="w-full h-auto pt-20 flex flex-col items-center justify-end p-4 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg shadow-lg relative">
          <div className="absolute top-[-5px] transform -translate-x-1/2 animate-bounce transition-transform hover:scale-105">
            <div className="relative w-32 h-20">
              <div className="absolute top-[-10px] w-20 h-5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-t-lg shadow-md z-10"></div>
              <div className="absolute w-32 h-20 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md z-0"></div>
            </div>
          </div>
          <input type="file" multiple onChange={handleFileChange} className="hidden" id="file-upload" />
          <label
            htmlFor="file-upload"
            className="mt-6 px-6 py-2 text-lg text-white bg-white/20 rounded-lg shadow-md cursor-pointer transition hover:bg-white/40"
          >
            Anexar Arquivos
          </label>
          <ul className="mt-4 w-full h-auto flex flex-col gap-2">
            {formData.arquivos.map((file, index) => (
              <li
                key={index}
                className="w-full h-auto flex justify-between items-center bg-gray-200 p-2 gap-2 rounded-lg"
              >
                <span className="truncate max-w-[80%] overflow-hidden whitespace-nowrap">{file.name}</span>
                <button type="button" onClick={() => removeFile(index)} className="text-red-600">
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="group flex border border-green-500 rounded-lg w-full h-8 items-center shadow-xl shadow-green-500/70 bg-green-500 justify-center gap-2 text-white hover:bg-white hover:text-green-600 transition duration-500"
          type="submit"
        >
          <h2 className="text-xl">Enviar</h2>
        </button>

        {/* Termos Jurídicos */}
        <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
          <h3 className="text-lg font-semibold text-green-600">Termos e Condições</h3>
          <p className="text-sm text-gray-700 mt-2">
            Ao enviar este formulário, você concorda com os termos jurídicos abaixo. A Tecnorural cobra uma taxa de serviço de{' '}
            <strong>1,5% sobre o valor total de cada laudo encaminhado para a instituição financeira</strong>, a ser pago pelo
            contratante após a aprovação do projeto e laudo. O não cumprimento desta obrigação poderá resultar em medidas legais.
            Leia atentamente:
          </p>
          <textarea
            className="w-full h-32 p-2 mt-2 border border-gray-300 rounded-lg resize-none bg-white text-gray-800 text-sm"
            value={`
                            1. A Tecnorural atua como intermediária no encaminhamento de projetos e laudos técnicos às instituições financeiras, sem assumir responsabilidade por aprovações ou reembolsos.
                            2. O contratante é responsável pelo pagamento da taxa de 1,5% sobre o valor total do projeto e laudo, a ser liquidado após a aprovação pela instituição financeira.
                            3. O envio dos dados e arquivos só será realizado após a aceitação expressa destes termos.
                            4. A Tecnorural reserva-se o direito de cancelar o serviço em caso de descumprimento dos termos ou informações fraudulentas.
                            5. Conforme a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), todos os dados fornecidos serão armazenados e protegidos de acordo com as disposições legais brasileiras, sendo utilizados exclusivamente para fins contratuais.
                        `}
            readOnly
          />
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              name="termosAceitos"
              checked={formData.termosAceitos}
              onChange={handleTermosChange}
              className="mr-2"
              required
            />
            <label className="text-sm text-gray-700">Eu aceito os termos e condições acima.</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulario;  