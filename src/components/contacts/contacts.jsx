/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { SiThunderbird } from "react-icons/si";
import { IoIosArrowDropdown } from "react-icons/io";
import Swal from "sweetalert2";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(`Atualizando ${name}:`, value); // Depuração para verificar mudanças
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Depuração: Verifique os valores antes de enviar
        console.log("Dados do formulário antes do envio:", formData);

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
            formDataToSend.append('name', formData.name.trim());
            formDataToSend.append('phone', formData.phone.trim());
            formDataToSend.append('email', formData.email.trim());
            formDataToSend.append('subject', formData.subject.trim());
            formDataToSend.append('message', formData.message.trim());

            // Depuração: Verifique os valores no FormData
            for (let [key, value] of formDataToSend.entries()) {
                console.log(`FormData - ${key}:`, value);
            }

            const response = await fetch('http://localhost:3000/enviar-contato', {
                method: 'POST',
                body: formDataToSend, // Envia como FormData, não JSON
            });

            const result = await response.text();

            if (!response.ok) {
                throw new Error(result || 'Erro ao enviar os dados');
            }

            if (result === 'E-mail enviado com sucesso!') {
                Swal.fire({
                    title: "Sucesso!",
                    text: "Mensagem enviada com sucesso!",
                    icon: "success",
                    confirmButtonText: "OK",
                    timer: 3000,
                    timerProgressBar: true,
                });

                // Limpa os campos após o envio
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                throw new Error(result || 'Erro desconhecido ao enviar a mensagem');
            }

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
        <div className="w-full h-auto flex flex-col items-center justify-center pt-28 pb-5 font-gummy bg-teal-950">
            <div className='max-w-[1200px] w-full h-24 flex px-8 py-8 items-center justify-between font-extralight'>
                <div className='w-80 h-auto flex items-center gap-10'>
                    <IoIosArrowDropdown className="w-10 h-10 text-green-800" />
                    <h3 className='text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800'>Contato</h3>
                </div>
            </div>
            <div className="w-full max-w-[1200px] h-auto flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-auto max-w-[800px] items-center justify-items-center md:px-0 md:justify-center md:flex">
                    <a className="group flex flex-col border border-green-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-green-500 justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transtion duration-500"
                        href="https://wa.me/555599154228?text=Olá, gostaria de saber mais!"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaWhatsapp className="w-10 h-10" />
                        <h2 className="text-xl">WhatsApp</h2>
                    </a>
                    <a className="group flex flex-col border border-red-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-red-500 justify-center gap-2 text-red-600 hover:bg-red-600 hover:text-white transtion duration-500"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=danieloliveira1804@gmail.com&su=Assunto&body=Mensagem"
                        target="_blank"
                        rel="noopener noreferrer">
                        <BiLogoGmail className="w-10 h-10" />
                        <h2 className="text-xl">Gmail</h2>
                    </a>
                    <a className="group flex flex-col border border-sky-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-sky-500 justify-center gap-2 text-sky-600 hover:bg-sky-600 hover:text-white transtion duration-500"
                        href="https://outlook.live.com/mail/0/deeplink/compose?to=danieloliveira1804@gmail.com&subject=Assunto&body=Mensagem"
                        target="_blank"
                        rel="noopener noreferrer">
                        <PiMicrosoftOutlookLogo className="w-10 h-10" />
                        <h2 className="text-xl">Outlook</h2>
                    </a>
                    <a className="group flex flex-col border border-blue-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-blue-500 justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white transtion duration-500"
                        href="mailto:danieloliveira1804@gmail.com?subject=Assunto&body=Mensagem">
                        <SiThunderbird className="w-10 h-10" />
                        <h2 className="text-xl">Thunderbird</h2>
                    </a>
                </div>
            </div>
            <div className="w-full max-w-[1200px] h-auto py-20 flex flex-col items-center justify-center gap-6 ">
                <h1 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">Entre em contato conosco:</h1>
                <form className="w-full max-w-[1200px] h-auto py-8 px-4 flex flex-col items-center justify-center gap-6" onSubmit={handleSubmit} id="contactForm">
                    <div className="group border border-gray-300 rounded-lg w-full h-[66px] p-2 focus-within:border-2 bg-white focus-within:border-green-500 transition duration-300 lg:w-1/2">
                        <h1 className="text-medium text-gray-900">Nome</h1>
                        <input className="border-none outline-none w-full"
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Digite seu nome completo"
                            required />
                    </div>
                    <div className="group border border-gray-300 rounded-lg w-full h-[66px] p-2 focus-within:border-2 bg-white focus-within:border-green-500 transition duration-300 lg:w-1/2">
                        <h1 className="text-medium text-gray-900">Telefone</h1>
                        <input className="border-none outline-none w-full"
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="\d{10,11}"
                            maxlength="13"
                            placeholder="55 12345 6789"
                            required />
                    </div>
                    <div className="group border border-gray-300 rounded-lg w-full h-[66px] p-2 focus-within:border-2 bg-white focus-within:border-green-500 transition duration-300 lg:w-1/2">
                        <h1 className="text-medium text-gray-900">E-mail</h1>
                        <input className="border-none outline-none w-full"
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite seu email"
                            required />
                        <span id="email-error" className="text-red-600 text-sm hidden">
                            O e-mail fornecido está incorreto.
                        </span>
                    </div>
                    <div className="group border border-gray-300 rounded-lg w-full h-[66px] p-2 focus-within:border-2 bg-white focus-within:border-green-500 transition duration-300 lg:w-1/2">
                        <h1 className="text-medium text-gray-900">Assunto</h1>
                        <input className="border-none outline-none w-full"
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Digite o assunto"
                            required />
                    </div>
                    <div className="group border border-gray-300 rounded-lg w-full p-2 bg-white focus-within:border-2 focus-within:border-green-500 transition duration-300 lg:w-1/2">
                        <h1 className="text-medium text-gray-900">Mensagem</h1>
                        <textarea className="border-none outline-none w-full"
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Escreva sua mensagem ou observação aqui"
                            rows="5"
                            maxlength="500"
                            required
                        ></textarea>
                    </div>
                    <button className="group flex border border-green-500 rounded-lg w-full h-8 items-center shadow-xl shadow-green-500/70 bg-green-500 justify-center gap-2 text-white
                     hover:bg-white hover:text-green-600 transtion duration-500 lg:w-1/2"
                        type="submit"
                        >
                        <h2 className="text-xl">Enviar</h2>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;