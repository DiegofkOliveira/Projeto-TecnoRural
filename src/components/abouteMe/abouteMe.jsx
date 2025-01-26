import { FaRegBuilding } from "react-icons/fa";
import { GoMortarBoard } from "react-icons/go";
import TecAgricola from '../../../public/tecAgr.png';

export default function Sobre() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center py-5 font-gummy">
            <div className='max-w-[1200px] h-auto flex flex-col px-8 py-10 items-start justify-center font-extralight'>
                <div className='w-56 h-auto flex gap-10'>
                    <FaRegBuilding className="w-8 h-8 text-green-700"/>
                    <h3 className='text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800'>Empresa</h3>
                </div>
                <div className='max-w-[1200px] h-auto flex justify-center items-center'>
                    <p className='font-extralight text-xl w-4/5 text-justify py-10'>
                        A nossa empresa é <span className='font-light bg-clip-text font-2xl font-light text-transparent bg-gradient-to-r from-green-500 to-green-500'>parceira de todos os produtores rurais</span>,
                        oferecendo suporte completo em projetos e laudos técnicos para atender às mais diversas
                        necessidades do campo. Contamos com uma <span className='font-light bg-clip-text font-2xl font-light text-transparent bg-gradient-to-r from-green-500 to-green-500'>equipe de técnicos altamente qualificados</span>,
                        comprometidos com o desenvolvimento sustentável e a valorização do trabalho no campo. Nosso compromisso é com este chão, <span className='font-light bg-clip-text font-2xl font-light text-transparent bg-gradient-to-r from-green-500 to-green-500'>
                            com cada plantação, colheita e cuidado</span>, garantindo soluções confiáveis e alinhadas às
                        demandas do setor agrícola. Juntos, <span className='font-light font-2xl bg-clip-text font-light text-transparent bg-gradient-to-r from-green-500 to-green-500'>cultivamos resultados que fazem a diferença para você e para o futuro da agricultura.</span>
                    </p>
                </div>
            </div>
            <div className='max-w-[1200px] h-full flex items-end justify-center bg-about-fundo bg-cover shadow-xl shadow-gray-500/50 rounded-lg md:bg-auto lg:bg-auto'>
                <div className='w-2/3 h-80 px-2 flex flex-col justify-center items-start backdrop-blur-[50px] shadow-lg shadow-custom border-none md:backdrop-blur-none md:shadow-none md:w-1/2 md:h-96'>
                    <h1 className='w-full text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 md:text-3xl'>Do Campo para o Futuro: Nosso Compromisso com este chão</h1>
                </div>
                <div className='flex items-end'>
                    <img className="w-100 h-100" src={TecAgricola} alt="Imagem de uma pessoa segurando um aparelho portatil" />
                </div>
            </div>
            <div className='max-w-[1200px] h-auto flex flex-col px-8 py-20 items-start justify-center font-extralight'>
                <div className='w-56 h-auto flex flex-row gap-10'>
                    <GoMortarBoard className="w-8 h-8 text-green-700"/>
                    <h2 className='text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800'>Responsável</h2>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex py-10 w-4/5'>
                        <p className='text-xl text-justify'>Com formação em Agropecuária desde 2016, este profissional atua com excelência na área há quase uma década,
                            especializando-se na elaboração de laudos técnicos e projetos para produtores rurais. Seu trabalho tem como
                            foco o desenvolvimento sustentável e a maximização do potencial das propriedades agrícolas, sempre com um
                            olhar atento às inovações tecnológicas do setor.
                        </p>
                    </div>
                    <div className='w-4/5'>
                        <p className='text-xl text-justify'>
                            Casado e pai de um filho, ele preza pelos valores de responsabilidade, ética e dedicação, aplicando esses
                            princípios tanto na vida pessoal quanto profissional. Esse perfil equilibrado reflete-se em sua capacidade de
                            atender às demandas do setor rural com seriedade e eficiência, construindo relações de confiança com seus
                            clientes e parceiros.
                        </p>
                    </div>
                    <div className='flex py-10 w-4/5'>
                        <p className='text-xl text-justify'>
                            Seja para otimizar a produtividade, garantir conformidade legal ou implementar soluções modernas no campo,
                            você pode contar com a experiência e o comprometimento desse técnico em agropecuária para trazer resultados
                            concretos e duradouros ao seu projeto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}