function Cotacao() {

    function getLastNDate(n) {
        const dates = [];
        const today = new Date();

        for (let i = 0; i < n; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i);
            const formattedDate = date.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
            dates.push(formattedDate);
        }

        return dates;
    }

    const last4Dates = getLastNDate(4);

    const valueSoja = ["R$ 126,00", "R$ 126,00", "R$ 126,00", "R$ 126,00"];
    const valueMilho = ["R$ 65,00", "R$ 65,00", "R$ 65,00", "R$ 65,00"];
    const valueTrigo = ["R$ 65,00", "R$ 65,00", "R$ 65,00", "R$ 65,00"];

    return (
        <div className="w-full h-auto px-8 py-20 flex flex-col items-center justify-center gap-4 relative">
            <div className='w-full max-w-[1200px] h-auto flex flex-row items-start justify-start roudend-md p-8 backdrop-blur-[30px] gap-5 shadow-lg shadow-custom border-[2px] border-[rgba(255,255,255,0.18)] lg:h-96'>
                <div className="flex flex-col w-full h-auto items-center justify-start py-2 gap-6 lg:h-80">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 font-gummy font-extralight text-3xl">Cotação</h1>
                    <div className="w-full flex flex-col items-center justify-between md:flex-row lg:flex-row">
                        <div className="w-80 h-56 flex flex-col items-center justify-center">
                            <img className="w-20 h-20" src="https://sistemafaep.org.br/wp-content/uploads/cotacoes/imgs/cbot-soja.png" alt="Imagem de grãos da soja" />
                            <h2 className="text-2xl pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 font-gummy font-light">Soja</h2>
                            {last4Dates.map((date, index) => (
                                <div key={index} className="w-3/4 flex flex-row items-center justify-center text-center gap-2 border border-green-500 roudend">
                                    <p className="flex items-center justify-center font-semibold bg-green-500 text-gray-100 w-1/2">{date}</p>
                                    <p className="flex items-center justify-center w-1/2">{valueSoja[index]}</p>
                                </div>
                            ))}
                        </div>
                        <div className="w-80 h-56 flex flex-col items-center justify-center">
                            <img className="w-20 h-20" src="https://sistemafaep.org.br/wp-content/uploads/cotacoes/imgs/cbot-milho.png" alt="Imagem de grãos da soja" />
                            <h2 className="text-2xl pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 font-gummy font-light">Milho</h2>
                            {last4Dates.map((date, index) => (
                                <div key={index} className="w-3/4 flex flex-row items-center justify-center text-center gap-2 border border-green-500 roudend">
                                    <p className="flex items-center justify-center font-semibold bg-green-500 text-gray-100 w-1/2">{date}</p>
                                    <p className="flex items-center justify-center w-1/2">{valueMilho[index]}</p>
                                </div>
                            ))}
                        </div>
                        <div className="w-80 h-56 flex flex-col items-center justify-center">
                            <img className="w-20 h-20" src="https://sistemafaep.org.br/wp-content/uploads/cotacoes/imgs/cbot-trigomole.png" alt="Imagem de grãos da soja" />
                            <h2 className="text-2xl pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 font-gummy font-light">Trigo</h2>
                            {last4Dates.map((date, index) => (
                                <div key={index} className="w-3/4 flex flex-row items-center justify-center text-center gap-2 border border-green-500 roudend">
                                    <p className="flex items-center justify-center font-semibold bg-green-500 text-gray-100 w-1/2">{date}</p>
                                    <p className="flex items-center justify-center w-1/2">{valueTrigo[index]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cotacao;