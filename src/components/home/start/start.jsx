import { useNavigate } from "react-router-dom";
import { TiArrowRightOutline } from "react-icons/ti";

function Start() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/sobre")
    }
    
    return (
        <div className='w-full h-auto pt-28 pb-16 flex flex-row items-center justify-center'>
            <div className='w-full h-[300px] flex flex-row items-center justify-start gap-5 bg-home-start bg-cover shadow-xl shadow-gray-500/50 rounded-lg md:bg-cover md:max-w-[1200px] md:h-[500px] md:px-8 lg:bg-auto lg:max-w-[1200px] lg:h-[500px] lg:px-8'>
                <div className='w-56 h-full flex flex-col gap-2 px-4 py-10 items-center justify-center backdrop-blur-[20px] shadow-lg shadow-custom border-none md:w-1/2 lg:w-1/2'>
                    <div className='p-4 flex flex-col items-center justify-center font-gummy md:w-4/5 md:h-3/4 lg:w-4/5 lg:h-1/2'>
                        <h1 className="text-lg font-extralight text-white md:text-2xl lg:text-3xl">Seja <span className="bg-clip-text font-light text-transparent bg-gradient-to-r 
                        from-green-300 to-green-500 text-lg uppercase md:text-2xl lg:text-3xl">bem-vindo</span> à nossa plataforma, onde você
                            encontra <span className="bg-clip-text font-light text-transparent bg-gradient-to-r from-green-300 to-green-500 text-lg uppercase md:text-2xl lg:text-3xl">suporte </span> 
                            para quem <span className="bg-clip-text font-light text-transparent bg-gradient-to-r from-green-300 to-green-500 text-lg uppercase md:text-2xl lg:text-3xl">vive e trabalha</span> no campo.
                        </h1>
                    </div>
                    <div className='w-40 h-auto p-2 flex justify-end font-gummy md:w-80 lg:w-80'>
                        <button onClick={handleButtonClick} type="submit" className="group flex border border-green-600 rounded-xl w-40 h-10 items-center shadow-xl shadow-green-500/50 
                        justify-center gap-2 text-base text-green-600 bg-white hover:bg-green-600 hover:text-white transtion duration-500 md md:text-xl lg:text-xl">
                            Saiba Mais
                            <TiArrowRightOutline className="w-4 h-4 md:w-6 h-6 lg:w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start;