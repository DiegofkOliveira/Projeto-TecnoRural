/* eslint-disable react/prop-types */
function WeatherInformations5Days({ weather5Days }) {

    let dailyForecast = {}

    for (let forecast of weather5Days.data.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = { ...forecast, rainTotal: forecast.rain?.["3h"] || 0 };
        } else {
            dailyForecast[date].rainTotal += forecast.rain?.["3h"] || 0;
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(0, 5)


    function convertDate(date) {
        const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const dayIndex = new Date(date.dt * 1000).getDay(); // Obtém o índice do dia (0-6)
        return days[dayIndex].substring(0, 7); // Retorna apenas "Segunda" (remove "-feira")
    }


    console.log(next5DaysForecast)
    return (
        <div className="w-full h-auto gap-2 flex flex-col items-center justify-center">
            {next5DaysForecast.map(forecast => (
                <div key={forecast.dt} className="w-full bg-green-200 flex flex-row items-center justify-around rounded-lg">
                    <div className="w-20 flex flex-col items-center justify-center gap-1 md:w-32">
                        <img className="w-12 h-12 md:w-16 md:h-16" src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <p className="capitalize bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 text-base md:text-xl">{convertDate(forecast)} </p>
                    </div>
                    <div className="w-32 flex flex-col items-start justify-center gap-1 md:w-32">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-4 bg-red-700 rounded-lg"></div><p className="text-sm md:text-lg">TEMPERATURA</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-4 bg-blue-700 rounded-lg"></div><p className="text-sm md:text-lg">CHUVA</p>
                        </div>
                    </div>
                    <div className="w-16 flex flex-col items-start justify-center gap-1 md:w-24">
                        <p className="text-base text-green-900 font-kanadaka font-normal md:text-lg">{Math.round(forecast.main.temp)}ºC</p>
                        <p className="text-base text-green-900 font-kanadaka font-normal lg:text-lg">{forecast.rainTotal.toFixed(1)} mm</p>
                    </div>
                    <div className="w-32 flex flex-col items-start justify-center gap-2 md:w-40">
                    <p className="text-sm font-light text-green-900 font-kanadaka md:text-lg">Umidade: {forecast.main.humidity}% </p>
                        <p className="text-sm text-green-900 capitalize font-light md:text-lg">{forecast.weather[0].description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

//  
export default WeatherInformations5Days;
