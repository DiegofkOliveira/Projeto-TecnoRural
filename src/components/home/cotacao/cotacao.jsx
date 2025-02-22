import { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Swal from "sweetalert2";

function Cotacao() {
    const [cotacaoAtual, setCotacaoAtual] = useState({
        soja: 'R$ 0.00',
        milho: 'R$ 0.00',
        trigo: 'R$ 0.00',
        date: 'N/A',
        time: '09:20' // Horário fixo de atualização (09h20)
    });

    useEffect(() => {
        const fetchCotacaoAtual = async () => {
            try {
                const response = await fetch('http://localhost:3000/historico');
                if (!response.ok) {
                    throw new Error('Erro ao buscar cotações');
                }
                const data = await response.json();

                // Pega a entrada mais recente do histórico (primeira entrada)
                const maisRecente = data[0]; // Assume que o histórico está ordenado do mais recente ao mais antigo

                if (maisRecente) {
                    // Formata a data fora do objeto
                    const [year, month, day] = maisRecente.date.split('-'); // Divide a data no formato "YYYY-MM-DD"
                    const formattedDate = `${day}/${month}/${year}`; // Formata para "DD/MM/YYYY"

                    const cotacaoFormatada = {
                        soja: `R$ ${maisRecente.cotacoes.soja.toFixed(2)}`,
                        milho: `R$ ${maisRecente.cotacoes.milho.toFixed(2)}`,
                        trigo: `R$ ${maisRecente.cotacoes.trigo.toFixed(2)}`,
                        date: formattedDate,
                        time: '09:20' // Mantém o horário fixo de atualização
                    };

                    setCotacaoAtual(cotacaoFormatada);
                } else {
                    throw new Error('Nenhuma cotação encontrada');
                }
            } catch (error) {
                console.error('Erro ao carregar cotações:', error);
                Swal.fire({
                    title: "Erro!",
                    text: "Não foi possível carregar as cotações. Verifique sua conexão ou o servidor.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        };

        // Executa a busca inicial
        fetchCotacaoAtual();

        // Configura a atualização diária às 09h20
        const intervalId = setInterval(() => {
            const now = new Date();
            const targetTime = new Date(now);
            targetTime.setHours(9, 20, 0, 0); // Define o horário alvo: 09:20:00

            if (now >= targetTime) {
                fetchCotacaoAtual(); // Atualiza as cotações se for após 09:20
            }
        }, 60000); // Verifica a cada minuto

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(intervalId);
    }, []); // Executa apenas uma vez ao montar o componente

    return (
        <div className="w-full h-auto px-8 py-20 flex flex-col items-center justify-center gap-4 relative bg-teal-950">
            <div className='w-full max-w-[1200px] h-auto flex flex-col items-center justify-center rounded-md p-8 bg-green-100 backdrop-blur-[30px] gap-5 shadow-lg shadow-custom border-[2px] border-[rgba(255,255,255,0.18)]'>
                <div className="flex flex-col w-full h-auto items-start justify-start py-2 gap-6">
                    <div className="w-80 h-auto flex items-center gap-10">
                        <IoIosArrowDropdown className="w-8 h-8 text-green-800" />
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 font-gummy font-extralight text-3xl">Cotação</h1>
                    </div>

                    {/* Valores Atualizados (em destaque, com horário) */}
                    <div className="w-full p-4">
                        <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 font-gummy">Valores Atualizados - {cotacaoAtual.date} às {cotacaoAtual.time}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                            <div className="flex flex-col items-center">
                                <img className="w-16 h-16 mb-2" src="https://sistemafaep.org.br/wp-content/uploads/cotacoes/imgs/cbot-soja.png" alt="Imagem de grãos da soja" />
                                <h3 className="text-lg font-medium text-green-700">Soja</h3>
                                <p className="text-xl font-bold text-green-900">{cotacaoAtual.soja}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="w-16 h-16 mb-2" src="https://sistemafaep.org.br/wp-content/uploads/cotacoes/imgs/cbot-milho.png" alt="Imagem de grãos do milho" />
                                <h3 className="text-lg font-medium text-green-700">Milho</h3>
                                <p className="text-xl font-bold text-green-900">{cotacaoAtual.milho}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="w-16 h-16 mb-2" src="https://sistemafaep.org.br/wp-content/uploads/cotacoes/imgs/cbot-trigomole.png" alt="Imagem de grãos do trigo" />
                                <h3 className="text-lg font-medium text-green-700">Trigo</h3>
                                <p className="text-xl font-bold text-green-900">{cotacaoAtual.trigo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cotacao;