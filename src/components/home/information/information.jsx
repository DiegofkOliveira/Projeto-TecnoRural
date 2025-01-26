import { IoIosArrowDropdown } from "react-icons/io";

function Information() {
    return (
        <div className="w-full max-w-[1200px] h-auto flex flex-col items-center justify-center gap-10 py-20 font-gummy">
            <h2 className="text-3xl font-medium bg-clip-text text-center text-transparent bg-gradient-to-r from-green-500 to-green-800">Porque nosso trabalho faz a diferença</h2>
            <div className="w-full h-auto flex flex-col text-justify items-center justify-center gap-4 md:px-4 md:flex-row lg:flex-row">
                <div className="w-full flex flex-col items-center justify-evenly gap-8">
                    <div className="w-64 flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                            <IoIosArrowDropdown className="w-7 h-7 text-green-800" />
                            <h3 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">RESPONSABILIDADE</h3>
                        </div>
                        <div>
                            <p className='text-lg font-extralight'>
                                Cuidamos de cada projeto como se fosse único, garantindo comprometimento, ética e excelência em todas as etapas.
                            </p>
                        </div>
                    </div>
                    <div className="w-64 flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                            <IoIosArrowDropdown className="w-7 h-7 text-green-800" />
                            <h3 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">SUPORTE</h3>
                        </div>
                        <div>
                            <p className='text-lg font-extralight'>
                                Nosso suporte técnico está disponível para esclarecer dúvidas e assegurar que você tenha a melhor experiência com nossos serviços
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <img className="rounded-lg shadow-xl shadow-gray-500/60" src="https://blog.climatefieldview.com.br/hs-fs/hubfs/incorporacao-novas-tecnologias.webp?width=832&name=incorporacao-novas-tecnologias.webp" alt="" />
                </div>
                <div className="w-full flex flex-col items-center justify-evenly gap-8">
                    <div className="w-64 flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                            <IoIosArrowDropdown className="w-7 h-7 text-green-800" />
                            <h3 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">TECNOLOGIA</h3>
                        </div>
                        <div>
                            <p className='text-lg font-extralight'>
                                Oferecemos soluções tecnológicas inovadoras de ponta, garantindo eficiência, precisão e resultados em cada projeto.
                            </p>
                        </div>
                    </div>
                    <div className="w-64 flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                            <IoIosArrowDropdown className="w-7 h-7 text-green-800" />
                            <h3 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">RESULTADO</h3>
                        </div>
                        <div>
                            <p className='text-lg font-extralight'>
                                Trabalhamos com eficiência e dedicação para alcançar os objetivos dos nossos clientes, superando expectativas e gerando valor em cada projeto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;