import { IoIosArrowDropdown } from "react-icons/io";

function Information() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center md:min-h-screen">
            <div className="w-full max-w-[1200px] px-2 flex flex-row items-center justify-center gap-10 pb-2 font-gummy">
                <div className="w-full h-6 bg-green-100 skew-x-[-20deg]"></div>
                <div className="w-1/6 h-6 bg-green-100 skew-x-[-20deg]"></div>
                <div className="w-1/6 h-6 bg-green-100 skew-x-[-20deg]"></div>
            </div>
            <div className="w-full max-w-[1200px] h-auto flex flex-col items-center justify-center gap-10 pb-20 font-gummy">
                <h2 className="text-2xl font-medium bg-clip-text text-center text-green-500 md:text-3xl">Porque nosso trabalho faz a diferença</h2>
                <div className="w-full h-auto flex flex-row text-justify items-center justify-center md:gap-4 md:px-4 md:flex-row lg:flex-row">
                    <div className="w-full flex flex-col items-center justify-evenly gap-8 px-2 h-auto">
                        <div className="w-40 flex flex-col gap-4 md:w-64">
                            <div className="flex flex-row gap-4">
                                <IoIosArrowDropdown className="w-6 h-6 text-green-500 md:w-7 md:h-7" />
                                <h3 className="text-lg font-medium bg-clip-text text-green-500 md:text-2xl">RESPONSÁVEL</h3>
                            </div>
                            <div>
                                <p className='text-sm text-white font-extralight md:text-lg'>
                                    Cuidamos de cada projeto como se fosse único, garantindo comprometimento, ética e excelência em todas as etapas.
                                </p>
                            </div>
                        </div>
                        <div className="w-40 flex flex-col gap-4 md:w-64">
                            <div className="flex flex-row gap-4">
                                <IoIosArrowDropdown className="w-6 h-6 text-green-500 md:w-7 md:h-7" />
                                <h3 className="text-lg font-medium bg-clip-text text-green-500 md:text-2xl">SUPORTE</h3>
                            </div>
                            <div>
                                <p className='text-sm text-white font-extralight md:text-lg'>
                                    Nosso suporte técnico está disponível para esclarecer dúvidas e assegurar que você tenha a melhor experiência com nossos serviços
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full md:px-12 md:px-0">
                        <img className="rounded-lg hidden lg:block" src="https://blog.climatefieldview.com.br/hs-fs/hubfs/incorporacao-novas-tecnologias.webp?width=832&name=incorporacao-novas-tecnologias.webp" alt="" />
                    </div>
                    <div className="w-full flex flex-col items-center justify-evenly gap-8 px-4 h-auto">
                        <div className="w-40 flex flex-col gap-4 md:w-64">
                            <div className="flex flex-row gap-4">
                                <IoIosArrowDropdown className="w-6 h-6 text-green-500 md:w-7 md:h-7" />
                                <h3 className="text-lg font-medium bg-clip-text text-green-500 md:text-2xl">TECNOLOGIA</h3>
                            </div>
                            <div>
                                <p className='text-sm text-white font-extralight md:text-lg'>
                                    Oferecemos soluções tecnológicas inovadoras de ponta, garantindo eficiência, precisão e resultados em cada projeto.
                                </p>
                            </div>
                        </div>
                        <div className="w-40 flex flex-col gap-4 md:w-64">
                            <div className="flex flex-row gap-4">
                                <IoIosArrowDropdown className="w-6 h-6 text-green-500 md:w-7 md:h-7" />
                                <h3 className="text-lg font-medium bg-clip-text text-green-500 md:text-2xl">RESULTADO</h3>
                            </div>
                            <div>
                                <p className='text-sm text-white font-extralight md:text-lg'>
                                    Trabalhamos com eficiência e dedicação para alcançar os objetivos dos nossos clientes, superando expectativas e gerando valor em cada projeto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;