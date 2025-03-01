/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

function End() {
    return (
        <div className="w-full h-auto flex flex-col font-thin font-gummy">
            {/* Seção Inferior - Carrossel */}
            <div className="w-full h-auto px-8 py-20 flex flex-col items-center justify-center gap-4 relative">
                <div className="w-full max-w-[1200px] h-auto flex items-center justify-center rounded-lg">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        className="w-full h-[420px] md:h-[500px] lg:h-[400px]" // Ajuste de altura para responsividade
                    >
                        <SwiperSlide className='rounded-lg w-full h-auto'>
                            <div className='w-full h-auto flex flex-col items-center justify-center md:h-96 lg:px-12 lg:flex-row lg:gap-6 relative'>
                                <img className='w-56 h-40 rounded-lg md:w-72 md:h-48 lg:w-96 lg:h-80 z-10' src="https://agro.estadao.com.br/app/uploads/2024/04/soja-768x512.jpg" alt="Soja" />
                                <div className='absolute w-[100%] h-[80%] bg-green-100 rounded-lg top-20 left-0 z-0 overflow-hidden lg:left-[20%] lg:h-[80%] lg:w-[80%]'></div>
                                <div className='w-full h-auto gap-2 flex flex-col justify-center rounded-lg p-4 md:h-48 lg:h-80 lg:p-6 relative z-20'>
                                    <h1 className='text-xl font-medium font-sriracha bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 md:text-2xl lg:text-3xl'>Soja</h1>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Plantio: </span>Outubro a Dezembro</p>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Colheita: </span>Março a Maio</p>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Detalhe: </span>A soja é geralmente semeada na primavera, aproveitando as temperaturas mais altas e a disponibilidade de água. A colheita ocorre no outono.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-lg w-full h-auto'>
                            <div className='w-full h-auto flex flex-col items-center justify-center md:h-96 lg:px-12 lg:flex-row lg:gap-6 relative'>
                                <img className='w-56 h-40 rounded-lg md:w-72 md:h-48 lg:w-96 lg:h-80 z-10' src="https://blog.aegro.com.br/wp-content/uploads/2021/02/tipos-de-graos-de-milho-1024x683.jpg" alt="Milho 1ª Safra" />
                                <div className='absolute w-[100%] h-[80%] bg-green-100 rounded-lg top-20 left-0 z-0 overflow-hidden lg:left-[20%] lg:h-[80%] lg:w-[80%]'></div>
                                <div className='w-full h-auto gap-2 flex flex-col justify-center rounded-lg p-4 md:h-48 lg:h-80 lg:p-6 relative z-20'>
                                    <h1 className='text-xl font-medium font-sriracha bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 md:text-2xl lg:text-3xl'>Milho</h1>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Plantio 1ª Safra: </span>Agosto a Novembro</p>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Colheita 1ª Safra: </span>Dezembro a Março</p>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Detalhe: </span>O milho pode ser cultivado em duas safras no estado. A "safrinha" depende de condições específicas, como a disponibilidade de chuvas no verão.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-lg w-full h-auto'>
                            <div className='w-full h-auto flex flex-col items-center justify-center md:h-96 lg:px-12 lg:flex-row lg:gap-6 relative'>
                                <img className='w-56 h-40 rounded-lg md:w-72 md:h-48 lg:w-96 lg:h-80 z-10' src="https://blog.aegro.com.br/wp-content/uploads/2021/02/tipos-de-graos-de-milho-1024x683.jpg" alt="Milho 2ª Safra" />
                                <div className='absolute w-[100%] h-[80%] bg-green-100 rounded-lg top-20 left-0 z-0 overflow-hidden lg:left-[20%] lg:h-[80%] lg:w-[80%]'></div>
                                <div className='w-full h-auto gap-2 flex flex-col justify-center rounded-lg p-4 md:h-48 lg:h-80 lg:p-6 relative z-20'>
                                    <h1 className='text-xl font-medium font-sriracha bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 md:text-2xl lg:text-3xl'>Milho</h1>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Plantio (safrinha): </span>Janeiro a Março</p>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Colheita (safrinha): </span>Maio a Julho</p>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Detalhe: </span>O milho pode ser cultivado em duas safras no estado. A "safrinha" depende de condições específicas, como a disponibilidade de chuvas no verão.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-lg w-full h-auto'>
                            <div className='w-full h-auto flex flex-col items-center justify-center md:h-96 lg:px-12 lg:flex-row lg:gap-6 relative'>
                                <img className='w-56 h-40 rounded-lg md:w-72 md:h-48 lg:w-96 lg:h-80 z-10' src="https://img.freepik.com/fotos-premium/agricultor-tem-grao-de-trigo-nas-maos_168410-2670.jpg" alt="Trigo" />
                                <div className='absolute w-[100%] h-[80%] bg-green-100 rounded-lg top-20 left-0 z-0 overflow-hidden lg:left-[20%] lg:h-[80%] lg:w-[80%]'></div>
                                <div className='w-full h-auto gap-2 flex flex-col justify-center rounded-lg p-4 md:h-48 lg:h-80 lg:p-6 relative z-20'>
                                    <h1 className='text-xl font-medium font-sriracha bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 md:text-2xl lg:text-3xl'>Trigo</h1>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Plantio: </span>Maio a Julho</p>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Colheita: </span>Setembro a Novembro</p>
                                    <p className='text-base text-green-900 md:text-lg lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium md:text-lg lg:text-xl'>Detalhe: </span>O trigo é uma cultura típica de inverno, aproveitando as temperaturas mais amenas e períodos de baixa incidência de pragas.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default End;