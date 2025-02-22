import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import BancoBrasil from "../../assets/bb.png";
import Banrisul from "../../assets/banrisul.png";
import Cresol from "../../assets/cresol.png";
import Sicoob from "../../assets/sicoob.png";
import Sicredi from "../../assets/sicredi.png";
import Santander from "../../assets/santander.png";
import Caixa from "../../assets/caixa.png";
import Bradesco from "../../assets/bradesco.png";
import Itau from "../../assets/itau.png";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Laudos() {
    const [bancoSelecionado, setBancoSelecionado] = useState(null);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        arquivos: [],
    });

    const itensPorBanco = {
        "Banco do Brasil": ["Notas", "Análise de solo vigente"],
        Sicredi: ["Notas", "Análise de solo vigente"],
        Sicoob: ["Notas", "Análise de solo vigente"],
        Cresol: ["Notas", "Análise de solo vigente"],
        Banrisul: ["Notas", "Análise de solo vigente"],
        Santander: ["Notas", "Análise de solo vigente"],
        Caixa: ["Notas", "Análise de solo vigente"],
        Bradesco: ["Notas", "Análise de solo vigente"],
        Itau: ["Notas", "Análise de solo vigente"],
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            arquivos: [...formData.arquivos, ...e.target.files],
        });
    };

    const removeFile = (index) => {
        setFormData({
            ...formData,
            arquivos: formData.arquivos.filter((_, i) => i !== index),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Enviando...",
            text: "Aguarde enquanto processamos seus dados.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('nome', formData.nome);
            formDataToSend.append('telefone', formData.telefone);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('bancos', bancoSelecionado ? [bancoSelecionado].join(', ') : '');
            formDataToSend.append('tipo', 'Laudos Técnicos');
            formData.arquivos.forEach(file => formDataToSend.append('arquivos', file));

            const response = await fetch('http://localhost:3000/enviar-formulario', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.text();

            if (!response.ok) {
                throw new Error(result || 'Erro ao enviar os dados');
            }

            if (result === 'E-mail enviado com sucesso!') {
                Swal.fire({
                    title: "Sucesso!",
                    text: "Formulário enviado com sucesso!",
                    icon: "success",
                    confirmButtonText: "OK",
                    timer: 3000,
                    timerProgressBar: true,
                });
            } else {
                throw new Error(result || 'Erro desconhecido ao enviar o formulário');
            }

            setFormData({
                nome: "",
                email: "",
                telefone: "",
                arquivos: [],
            });
            setBancoSelecionado(null);

        } catch (error) {
            console.error("Erro no envio:", error);

            let errorMessage = "Ocorreu um problema ao enviar. Tente novamente.";
            if (error.message.includes('Failed to fetch')) {
                errorMessage = "Erro de conexão com o servidor. Verifique sua internet ou o backend.";
            } else if (error.message) {
                errorMessage = error.message;
            }

            Swal.fire({
                title: "Erro!",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="w-full h-auto min-h-screen flex flex-col items-center justify-center pt-28 pb-5 font-gummy bg-teal-950">
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
            <div className="grid grid-cols-1 w-full max-w-[1200px] h-auto items-start justify-items-center gap-10 px-4 lg:flex lg:flex-row lg:justify-center">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        640: { // Tela média (tablet, ~640px ou mais)
                            slidesPerView: 2,
                        },
                        1024: { // Tela grande (desktop, ~1024px ou mais)
                            slidesPerView: 3,
                        },
                    }}
                    className="flex w-full md:w-full h-48"
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-yellow-400 rounded-xl w-32 h-32 items-center shadow-xl shadow-yellow-400 justify-center text-blue-800 hover:bg-yellow-400 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Banco do Brasil")}
                            >
                                <img className="w-10 h-10" src={BancoBrasil} alt="Banco do Brasil" />
                                <h2 className="text-xl">Banco do Brasil</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-green-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-green-600 justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Sicredi")}
                            >
                                <img className="w-10 h-10" src={Sicredi} alt="Sicredi" />
                                <h2 className="text-xl">Sicredi</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-blue-800 rounded-xl w-32 h-32 items-center shadow-xl shadow-blue-800 justify-center gap-2 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Sicoob")}
                            >
                                <img className="w-10 h-10" src={Sicoob} alt="Sicoob" />
                                <h2 className="text-xl">Sicoob</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-orange-400 rounded-xl w-32 h-32 items-center shadow-xl shadow-orange-400 justify-center gap-2 text-orange-400 hover:bg-orange-400 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Cresol")}
                            >
                                <img className="w-10 h-10" src={Cresol} alt="Cresol" />
                                <h2 className="text-xl">Cresol</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-blue-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-blue-500 justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Banrisul")}
                            >
                                <img className="w-14 h-14" src={Banrisul} alt="Banrisul" />
                                <h2 className="text-xl">Banrisul</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-red-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-red-600 justify-center gap-2 text-red-600 hover:bg-red-600 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Santander")}
                            >
                                <img className="w-14 h-14" src={Santander} alt="Santander" />
                                <h2 className="text-xl">Santander</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-blue-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-blue-500 justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Caixa")}
                            >
                                <img className="w-14 h-14" src={Caixa} alt="Caixa" />
                                <h2 className="text-xl">Caixa</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-red-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-red-600 justify-center gap-2 text-red-600 hover:bg-red-600 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Bradesco")}
                            >
                                <img className="w-14 h-10" src={Bradesco} alt="Bradesco" />
                                <h2 className="text-xl">Bradesco</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <button
                                className="group flex flex-col border border-orange-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-orange-600 justify-center gap-2 text-orange-600 hover:bg-orange-600 hover:text-white transition duration-500"
                                onClick={() => setBancoSelecionado("Itau")}
                            >
                                <img className="w-10 h-10" src={Itau} alt="Itau" />
                                <h2 className="text-xl">Itau</h2>
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Formulário Condicional */}
            {bancoSelecionado && (
                <div className="w-full max-w-[800px] bg-white p-6 mt-10 shadow-lg rounded-lg border border-gray-300">
                    <h2 className="text-xl font-bold text-green-600">Informações para {bancoSelecionado}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mt-4">
                        <label className="group border border-gray-300 rounded-lg w-full h-16 p-2 focus-within:border-2 focus-within:border-green-500 transition duration-300">
                            <span className="text-gray-600">Nome:</span>
                            <input className="border-none outline-none w-full"
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required />
                        </label>
                        <label className="group border border-gray-300 rounded-lg w-full h-16 p-2 focus-within:border-2 focus-within:border-green-500 transition duration-300">
                            <span className="text-gray-600">Telefone:</span>
                            <input className="border-none outline-none w-full"
                                type="tel"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                pattern="\d{10,11}"
                                required />
                        </label>
                        <label className="group border border-gray-300 rounded-lg w-full h-16 p-2 focus-within:border-2 focus-within:border-green-500 transition duration-300">
                            <span className="text-gray-600">E-mail:</span>
                            <input className="border-none outline-none w-full"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required />
                            <span id="email-error" className="text-red-600 text-sm hidden">
                                O e-mail fornecido está incorreto.
                            </span>
                        </label>

                        <div className="w-full flex flex-col items-start mt-4 pb-8">
                            <h1 className="text-lg font-semibold">Anexe os seguintes arquivos:</h1>
                            <ul className="mt-2">
                                {itensPorBanco[bancoSelecionado].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-700">
                                        <TbPointFilled className="text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full h-auto pt-20 flex flex-col items-center justify-end p-4 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg shadow-lg h-40 relative">
                            <div className="absolute top-[-5px] transform -translate-x-1/2 animate-bounce transition-transform hover:scale-105">
                                <div className="relative w-32 h-20">
                                    <div className="absolute top-[-10px] w-20 h-5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-t-lg shadow-md z-10"></div>
                                    <div className="absolute w-32 h-20 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md z-0"></div>
                                </div>
                            </div>
                            <input type="file" multiple onChange={handleFileChange} className="hidden" id="file-upload" />
                            <label htmlFor="file-upload" className="mt-6 px-6 py-2 text-lg text-white bg-white/20 rounded-lg shadow-md cursor-pointer transition hover:bg-white/40">Anexar Arquivos</label>
                            <ul className="mt-4 w-full h-auto flex flex-col gap-2">
                                {formData.arquivos.map((file, index) => (
                                    <li key={index} className="w-full h-auto flex justify-between items-center bg-gray-200 p-2 gap-2 rounded-lg">
                                        <span className="truncate max-w-[80%] overflow-hidden whitespace-nowrap">{file.name}</span>
                                        <button type="button" onClick={() => removeFile(index)} className="text-red-600">Remover</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="group flex border border-green-500 rounded-lg w-full h-8 items-center shadow-xl shadow-green-500/70 bg-green-500 justify-center gap-2 text-white
                        hover:bg-white hover:text-green-600 transtion duration-500"
                            type="submit"
                        >
                            <h2 className="text-xl">Enviar</h2>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Laudos;