// src/components/SelecaoBancos.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import BancoBrasil from '../../assets/bb.png';
import Banrisul from '../../assets/banrisul.png';
import Cresol from '../../assets/cresol.png';
import Sicoob from '../../assets/sicoob.png';
import Sicredi from '../../assets/sicredi.png';
import Santander from '../../assets/santander.png';
import Caixa from '../../assets/caixa.png';
import Bradesco from '../../assets/bradesco.png';
import Itau from '../../assets/itau.png';

function SelecaoBancos({ handleBancoSelecionado }) {
  return (
    <>
      <h1 className="py-10 px-4 text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">
        Escolha o seu Banco:
      </h1>
      <div className="grid grid-cols-1 w-full max-w-[800px] h-auto items-start justify-items-center gap-10 px-4 lg:flex lg:flex-row lg:justify-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="flex w-full md:w-full h-48"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-yellow-400 rounded-xl w-32 h-32 items-center shadow-xl shadow-yellow-400 justify-center text-blue-800 hover:bg-yellow-400 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Banco do Brasil')}
              >
                <img className="w-10 h-10" src={BancoBrasil} alt="Banco do Brasil" />
                <h2 className="text-xl">Banco do Brasil</h2>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-green-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-green-600 justify-center gap-2 text-green-600 hover:bg-green-600 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Sicredi')}
              >
                <img className="w-10 h-10" src={Sicredi} alt="Sicredi" />
                <h2 className="text-xl">Sicredi</h2>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-blue-800 rounded-xl w-32 h-32 items-center shadow-xl shadow-blue-800 justify-center gap-2 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Sicoob')}
              >
                <img className="w-10 h-10" src={Sicoob} alt="Sicoob" />
                <h2 className="text-xl">Sicoob</h2>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-orange-400 rounded-xl w-32 h-32 items-center shadow-xl shadow-orange-400 justify-center gap-2 text-orange-400 hover:bg-orange-400 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Cresol')}
              >
                <img className="w-10 h-10" src={Cresol} alt="Cresol" />
                <h2 className="text-xl">Cresol</h2>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-blue-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-blue-500 justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Banrisul')}
              >
                <img className="w-14 h-14" src={Banrisul} alt="Banrisul" />
                <h2 className="text-xl">Banrisul</h2>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-red-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-red-600 justify-center gap-2 text-red-600 hover:bg-red-600 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Santander')}
              >
                <img className="w-14 h-14" src={Santander} alt="Santander" />
                <h2 className="text-xl">Santander</h2>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-blue-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-blue-500 justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Caixa')}
              >
                <img className="w-14 h-14" src={Caixa} alt="Caixa" />
                <h2 className="text-xl">Caixa</h2>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-red-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-red-600 justify-center gap-2 text-red-600 hover:bg-red-600 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Bradesco')}
              >
                <img className="w-14 h-10" src={Bradesco} alt="Bradesco" />
                <h2 className="text-xl">Bradesco</h2>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <button
                className="group flex flex-col border border-orange-600 rounded-xl w-32 h-32 items-center shadow-xl shadow-orange-600 justify-center gap-2 text-orange-600 hover:bg-orange-600 hover:text-white transition duration-500"
                onClick={() => handleBancoSelecionado('Itau')}
              >
                <img className="w-10 h-10" src={Itau} alt="Itau" />
                <h2 className="text-xl">Itau</h2>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SelecaoBancos;