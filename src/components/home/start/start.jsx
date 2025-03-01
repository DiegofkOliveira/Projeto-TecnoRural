import { useNavigate } from "react-router-dom";
import { TiArrowRightOutline } from "react-icons/ti";
import TecnoRural from "../../../assets/Tecnorural.png";

function Start() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/Quem somos")
    }

    return (
        <div className="w-full h-auto min-h-screen pb-16 flex items-center justify-center font-gummy">
            <div className="w-full h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('../../assets/campo.png')] lg:flex-row lg:justify-center">
                <div className="flex flex-col items-center justify-center w-full h-auto md:w-1/2 lg:w-1/3">
                    <img className="w-60 md:w-2/3 lg:w-2/3" src={TecnoRural} alt="Logo no centro" />
                    <h1 className="text-3xl h-10 font-extralight text-white">Técnologia e Técnica</h1>
                    <p className="bg-clip-text h-16 font-light text-transparent bg-gradient-to-r from-green-300 to-teal-500 text-3xl">A Favor do Agro</p>
                </div>
                <div className="relative w-full h-auto flex flex-col px-8 items-end justify-center md:px-10 md:w-2/3 lg:w-1/3 overflow-x-hidden">
                    <div className="absolute w-full h-full rounded-lg right-1 z-0 overflow-hidden border-2 border-green-100 skew-x-[-10deg] "></div>
                    <p className="bg-clip-text h-auto font-light text-green-100 text-2xl md:text-3xl">Suporte completo em projetos e laudos técnicos para atender às mais diversas
                        necessidades do campo</p>
                    <div className="flex w-1/2 z-10 justify-end pt-10">
                        <button onClick={handleButtonClick} type="submit" className="group flex border-none rounded-xl w-40 h-10 items-center shadow-xl shadow-teal-800 
                        justify-center gap-2 text-base text-teal-800 bg-white hover:bg-teal-800 hover:text-white transtion duration-500 md md:text-xl lg:text-xl">
                            Saiba Mais
                            <TiArrowRightOutline className="w-4 h-4 md:w-6 h-6 lg:w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start;