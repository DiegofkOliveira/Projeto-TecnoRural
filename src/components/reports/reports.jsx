import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import BancoBrasil from "../../assets/bb.png";
import Caixa from "../../assets/caixa.png";
import Cresol from "../../assets/cresol.png";
import Sicoob from "../../assets/sicoob.png";
import Sicredi from "../../assets/sicredi.png";

function Reports() {
    const [bancoSelecionado, setBancoSelecionado] = useState(null);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        documento: "",
    });

    // Função para atualizar os dados do formulário
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Função para enviar o formulário (Futuro: integrar com EmailJS ou API)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando dados:", formData);
        alert(`Formulário enviado com sucesso para o ${bancoSelecionado}!`);
    };

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center py-5 font-gummy">
            {/* Título */}
            <div className="max-w-[1200px] w-full h-24 flex px-8 py-8 items-center justify-between font-extralight">
                <div className="w-80 h-auto flex gap-10">
                    <IoIosArrowDropdown className="w-8 h-8 text-green-800" />
                    <h3 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">
                        Laudos Técnicos
                    </h3>
                </div>
            </div>

            {/* Seleção de Bancos */}
            <h1 className="py-10 px-4 text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">
                Escolha o seu Banco:
            </h1>
            <div className="grid grid-cols-1 w-full max-w-[1200px] h-auto items-start justify-items-center gap-10 px-4 md:grid-cols-3 lg:flex lg:flex-row">
                <button
                    className="group flex border border-yellow-400 rounded-full w-48 h-10 items-center shadow-xl shadow-yellow-400 justify-center gap-2 text-blue-800 hover:bg-yellow-400 hover:text-white transition duration-500"
                    onClick={() => setBancoSelecionado("Banco do Brasil")}
                >
                    <img className="w-6 h-6" src={BancoBrasil} alt="Banco do Brasil" />
                    <h2 className="text-xl">Banco do Brasil</h2>
                </button>

                <button
                    className="group flex border border-green-600 rounded-full w-48 h-10 items-center shadow-xl shadow-green-600 justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500"
                    onClick={() => setBancoSelecionado("Sicredi")}
                >
                    <img className="w-6 h-6" src={Sicredi} alt="Sicredi" />
                    <h2 className="text-xl">Sicredi</h2>
                </button>

                <button
                    className="group flex border border-blue-800 rounded-full w-48 h-10 items-center shadow-xl shadow-blue-800 justify-center gap-2 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-500"
                    onClick={() => setBancoSelecionado("Sicoob")}
                >
                    <img className="w-6 h-6" src={Sicoob} alt="Sicoob" />
                    <h2 className="text-xl">Sicoob</h2>
                </button>

                <button
                    className="group flex border border-orange-400 rounded-full w-48 h-10 items-center shadow-xl shadow-orange-400 justify-center gap-2 text-orange-400 hover:bg-orange-400 hover:text-white transition duration-500"
                    onClick={() => setBancoSelecionado("Cresol")}
                >
                    <img className="w-6 h-6" src={Cresol} alt="Cresol" />
                    <h2 className="text-xl">Cresol</h2>
                </button>

                <button
                    className="group flex border border-blue-600 rounded-full w-48 h-10 items-center shadow-xl shadow-blue-500/50 justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-500"
                    onClick={() => setBancoSelecionado("Caixa Federal")}
                >
                    <img className="w-6 h-6" src={Caixa} alt="Caixa Federal" />
                    <h2 className="text-xl">Caixa Federal</h2>
                </button>
            </div>

            {/* Formulário Condicional */}
            {bancoSelecionado && (
                <div className="w-full max-w-md bg-white p-6 mt-10 shadow-lg rounded-lg border border-gray-300">
                    <h2 className="text-xl font-bold text-green-600">Informações para {bancoSelecionado}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                        <label className="flex flex-col">
                            <span className="text-gray-600">Nome:</span>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className="p-2 border rounded-md"
                                required
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-gray-600">E-mail:</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-2 border rounded-md"
                                required
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-gray-600">Documento:</span>
                            <input
                                type="file"
                                name="documento"
                                onChange={handleChange}
                                className="p-2 border rounded-md"
                                required
                            />
                        </label>

                        <button className="group flex border border-green-500 rounded-lg w-full h-8 items-center shadow-xl shadow-green-500/70 bg-green-500 justify-center gap-2 text-white
                     hover:bg-white hover:text-green-600 transtion duration-500"
                            href="">
                            <h2 className="text-xl">Enviar</h2>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Reports;
