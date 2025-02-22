import { useState, useRef } from 'react';
import axios from 'axios';
import WeatherInformations5Days from './WeatherInformations5Days';


function Weather() {
    const [weather5Days, setweather5Days] = useState();
    const inputRef = useRef();

    async function searchCity() {
        console.log(inputRef.current.value)
        const nameCity = inputRef.current.value
        const key = "09d8cb5355fce7825f9694fee8746819"
        const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=${key}&lang=pt_br&units=metric`

        const apiInfo5Days = await axios.get(url5Days)

        setweather5Days(apiInfo5Days)
    }

    return (
        <div className="w-full h-auto px-8 py-20 flex flex-col items-center justify-center gap-4 relative font-gummy">
            <div className='w-full max-w-[1200px] h-auto flex flex-row items-start justify-start rounded-lg p-8 gap-5'>
                <div className="w-full max-w-[1200px] h-auto flex flex-col items-start justify-start">
                    <div className='flex flex-col w-full items-center justify-start gap-5'>
                        <h2 className="w-full font-normal bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 font-extralight text-xl lg:text-2xl">Previsão do tempo para os próximos 5 dias</h2>
                        <div className="flex items-center justify-center border w-full focus-within:border-2 focus-within:border-green-500 transition duration-300 pr-3 gap-2 bg-white border-gray-500 h-[36px] rounded-[5px] overflow-hidden">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Digite o nome da cidade"
                                className="w-full h-full pl-4 outline-none font-kanadaka placeholder-gray-500 text-sm"
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        searchCity(); // Chama a função de busca quando a tecla "Enter" é pressionada
                                    }
                                }}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={searchCity}
                                x="0px"
                                y="0px"
                                width={22}
                                height={22}
                                viewBox="0 0 30 30"
                                fill="#6B7280"
                            >
                                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                            </svg>
                        </div>

                    </div>
                    <div className='w-full h-auto gap-4 py-4 flex flex-col items-center md:gap-0 md:flex-row'>
                        {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;