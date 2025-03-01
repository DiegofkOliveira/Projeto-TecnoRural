import { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Swal from "sweetalert2";

function Cotacao() {
    const [cotacaoAtual, setCotacaoAtual] = useState({
        soja: 'R$ 0.00',
        milho: 'R$ 0.00',
        trigo: 'R$ 0.00',
        date: 'N/A',
        time: '09:20 ou 14:00' // Horário fixo ajustado para refletir as coletas (09h20 ou 14h00)
    });

    useEffect(() => {
        const fetchCotacaoAtual = async () => {
            try {
                console.log('Tentando buscar cotações de: http://localhost:3000/historico');
                const response = await fetch('http://localhost:3000/historico');
                console.log('Resposta recebida:', response);

                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                console.log('Dados recebidos:', data);

                if (!data || data.length === 0 || !data[0]) {
                    // Caso o histórico esteja vazio, use valores padrão
                    setCotacaoAtual({
                        soja: 'R$ 0.00',
                        milho: 'R$ 0.00',
                        trigo: 'R$ 0.00',
                        date: 'N/A',
                        time: '09:20 ou 14:00'
                    });
                    return;
                }

                // Formata a data fora do objeto
                const [year, month, day] = data[0].date.split('-'); // Divide a data no formato "YYYY-MM-DD"
                const formattedDate = `${day}/${month}/${year}`; // Formata para "DD/MM/YYYY"

                // Determina o horário com base na hora atual (simplificado)
                const now = new Date();
                const hour = now.getHours();
                let updateTime = '09:20';
                if (hour >= 14) updateTime = '14:00'; // Assume que após 14h é a coleta das 14h

                const cotacaoFormatada = {
                    soja: `R$ ${data[0].cotacoes.soja.toFixed(2)}`,
                    milho: `R$ ${data[0].cotacoes.milho.toFixed(2)}`,
                    trigo: `R$ ${data[0].cotacoes.trigo.toFixed(2)}`,
                    date: formattedDate,
                    time: updateTime // Horário dinâmico baseado na última coleta
                };

                setCotacaoAtual(cotacaoFormatada);
            } catch (error) {
                console.error('Erro ao carregar cotações:', error);
                Swal.fire({
                    title: "Erro!",
                    text: `Não foi possível carregar as cotações. Verifique sua conexão ou o servidor. Detalhes: ${error.message}`,
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        };

        // Executa a busca inicial
        fetchCotacaoAtual();

        // Configura a verificação periódica para atualizar o horário (opcional, se desejar manter)
        const intervalId = setInterval(() => {
            fetchCotacaoAtual();
        }, 3600000); // Verifica a cada hora (ajuste conforme necessário)

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-auto px-2 py-20 flex flex-col items-center justify-center gap-4 relative bg-teal-950">
            <div className='w-full max-w-[1200px] h-auto flex flex-col items-center justify-center rounded-md p-2 bg-green-100 backdrop-blur-[30px] gap-5 shadow-lg shadow-custom border-[2px] border-[rgba(255,255,255,0.18)]'>
                <div className="flex flex-col w-full h-auto items-start justify-start py-2 gap-6">
                    <div className="w-80 h-auto flex items-center gap-10">
                        <IoIosArrowDropdown className="w-8 h-8 text-green-800" />
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 font-gummy font-extralight text-2xl md:text-3xl">Cotação</h1>
                    </div>

                    {/* Valores Atualizados (em destaque, com horário) */}
                    <div className="w-full md:p-4">
                        <h2 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 font-gummy md:text-xl">Valores Atualizados - {cotacaoAtual.date} às {cotacaoAtual.time}</h2>
                        <div className="grid grid-cols-3 gap-4 mt-2">
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