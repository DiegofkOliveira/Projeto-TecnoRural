/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { LuMailOpen } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
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

    // Estado para controlar se o e-mail foi copiado
    const [emailCopied, setEmailCopied] = useState(false);

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

    // Função para copiar o e-mail para a área de transferência
    const handleCopyEmail = async () => {
        try {
            const email = "danieloliveira1804@gmail.com"; // E-mail cadastrado
            await navigator.clipboard.writeText(email);
            setEmailCopied(true); // Altera o ícone para aberto

            // Feedback visual com Swal
            Swal.fire({
                title: "Copiado!",
                text: "E-mail copiado para a área de transferência.",
                icon: "success",
                confirmButtonText: "OK",
                timer: 2000,
                timerProgressBar: true,
            });

            // Reverte o ícone para fechado após 3 segundos (opcional)
            setTimeout(() => {
                setEmailCopied(false);
            }, 3000);
        } catch (error) {
            console.error("Erro ao copiar e-mail:", error);
            Swal.fire({
                title: "Erro!",
                text: "Não foi possível copiar o e-mail. Tente novamente.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center pt-28 pb-5 font-gummy bg-no-repeat bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('../assets/contato.png')]">
            <div className='max-w-[1200px] w-full h-24 flex px-8 py-8 items-center justify-between font-extralight'>
                <div className='w-80 h-auto flex items-center gap-10'>
                    <IoIosArrowDropdown className="w-10 h-10 text-green-800" />
                    <h3 className='text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800'>Contato</h3>
                </div>
            </div>
            <div className="w-full max-w-[1200px] h-auto flex items-center justify-center">
                <div className="flex gap-4 w-full h-auto max-w-[800px] items-center justify-center">
                    <a className="group flex flex-row border border-red-600 rounded-xl w-48 h-20 items-center shadow-xl shadow-red-500 justify-center gap-2 text-red-600 hover:bg-red-600 hover:text-white transtion duration-500"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=danieloliveira1804@gmail.com&su=Assunto&body=Mensagem"
                        target="_blank"
                        rel="noopener noreferrer">
                        <BiLogoGmail className="w-10 h-10" />
                        <h2 className="text-xl">Gmail</h2>
                    </a>
                    <button
                        onClick={handleCopyEmail}
                        className="group flex flex-row border border-blue-600 rounded-xl w-48 h-20 items-center shadow-xl shadow-blue-500 justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-500"
                    >
                        {emailCopied ? (
                            <LuMailOpen className="w-10 h-10" />
                        ) : (
                            <LuMail className="w-10 h-10" />
                        )}
                        <h2 className="text-xl">Copiar E-mail</h2>
                    </button>
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