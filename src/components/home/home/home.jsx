import Weather from '../weather/weather';
import Cotacao from '../cotacao/cotacao';
import Start from '../start/start';
import End from '../end/end'
import Information from '../information/information';

function Home() {

    return (
        <main className='w-full h-auto flex flex-col items-center justify-center bg-gray-100/50'>
            <Start />
            <Information/>
            <Weather />
            <Cotacao />
            <End/>
        </main>
    )
}

export default Home;
