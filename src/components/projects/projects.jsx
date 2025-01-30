import { IoIosArrowDropdown } from "react-icons/io";
import BancoBrasil from "../../assets/bb.png"
import Caixa from "../../assets/caixa.png"
import Cresol from "../../assets/cresol.png"
import Sicoob from "../../assets/sicoob.png"
import Sicredi from "../../assets/sicredi.png"

function Projects() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center py-5 font-gummy">
            <div className='max-w-[1200px] w-full h-24 flex px-8 py-8 items-center justify-between font-extralight '>
                <div className='w-80 h-auto flex gap-10'>
                    <IoIosArrowDropdown className="w-8 h-8 text-green-800" />
                    <h3 className='text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800'>Projetos Técnicos</h3>
                </div>
            </div>
            <div className="w-full max-w-[1200px] h-auto flex flex-col items-start justify-center">
                <h1 className="py-10 px-4 text-2xl text-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">Escolha o seu Banco:</h1>
                <div className="grid grid-cols-2 w-full h-auto items-start justify-items-center gap-10 px-4 md:grid-cols-3 lg:flex lg:flex-row">
                    <a className="group flex border border-yellow-400 rounded-full w-48 h-10 items-center shadow-xl shadow-yellow-400 justify-center gap-2 text-blue-800 hover:bg-yellow-400 hover:text-white transtion duration-500" href="">
                        <img className="w-6 h-6" src={BancoBrasil} alt="" />
                        <h2 className="text-xl">Banco do Brasil</h2>
                    </a>
                    <a className="group flex border border-green-600 rounded-full w-48 h-10 items-center shadow-xl shadow-green-600 justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transtion duration-500" href="">
                        <img className="w-6 h-6" src={Sicredi} alt="" />
                        <h2 className="text-xl">Sicredi</h2>
                    </a>
                    <a className="group flex border border-blue-800 rounded-full w-48 h-10 items-center shadow-xl shadow-blue-800 justify-center gap-2 text-blue-800 hover:bg-blue-800 hover:text-white transtion duration-500" href="">
                        <img className="w-6 h-6" src={Sicoob} alt="" />
                        <h2 className="text-xl">Sicoob</h2>
                    </a>
                    <a className="group flex border border-orange-400 rounded-full w-48 h-10 items-center shadow-xl shadow-orange-400 justify-center gap-2 text-orange-400 hover:bg-orange-400 hover:text-white transtion duration-500" href="">
                        <img className="w-6 h-6" src={Cresol} alt="" />
                        <h2 className="text-xl">Cresol</h2>
                    </a>
                    <a className="group flex border border-blue-600 rounded-full w-48 h-10 items-center shadow-xl shadow-blue-500/50 justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white transtion duration-500" href="">
                        <img className="w-6 h-6" src={Caixa} alt="" />
                        <h2 className="text-xl">Caixa Federeal</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;