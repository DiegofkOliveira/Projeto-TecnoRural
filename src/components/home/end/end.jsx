/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function End() {
    return (
        <div className="w-full h-auto px-8 py-20 flex flex-col items-center justify-center gap-4 relative font-thin font-gummy">
            <div className="w-full max-w-[1200px] h-[400px] flex items-center justify-center rounded-lg">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="w-full h-[420px]"
                >
                    <SwiperSlide className='rounded-lg w-full h-auto'>
                        <div className='w-full h-auto flex flex-col items-center justify-center md:h-96 lg:px-12 lg:flex-row lg:gap-6'>
                            <img className='w-56 h-40 rounded-lg lg:w-96 lg:h-80' src="https://agro.estadao.com.br/app/uploads/2024/04/soja-768x512.jpg" alt="" />
                            <div className='w-ful h-auto gap-2 flex flex-col justify-center rounded-lg lg:h-80'>
                                <h1 className='text-xl font-medium font-sriracha bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 lg:text-2xl'>Soja</h1>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Plantio: </span>Outubro a Dezembro</p>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Colheita: </span>Março a Maio</p>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Detalhe: </span>A soja é geralmente semeada na primavera, aproveitando as temperaturas mais altas e a disponibilidade de água. A colheita ocorre no outono.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='rounded-lg w-full h-auto'>
                        <div className='w-full h-auto flex flex-col items-center justify-center lg:h-96 lg:px-12 lg:flex-row lg:gap-6'>
                            <img className='w-56 h-40 rounded-lg lg:w-96 lg:h-80' src="https://blog.aegro.com.br/wp-content/uploads/2021/02/tipos-de-graos-de-milho-1024x683.jpg" alt="" />
                            <div className='w-ful h-auto gap-2 flex flex-col justify-center rounded-lg lg:h-80'>
                                <h1 className='text-xl font-medium font-sriracha bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 lg:text-2xl'>Milho</h1>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'> Plantio 1ª Safra: </span>Agosto a Novembro</p>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Colheita 1ª Safra: </span>Dezembro a Março</p>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Detalhe: </span>O milho pode ser cultivado em duas safras no estado. A "safrinha" depende de condições específicas, como a disponibilidade de chuvas no verão.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='rounded-lg w-full h-auto'>
                        <div className='w-full h-auto flex flex-col items-center justify-center lg:h-96 lg:px-12 lg:flex-row lg:gap-6'>
                            <img className='w-56 h-40 rounded-lg lg:w-96 lg:h-80' src="https://blog.aegro.com.br/wp-content/uploads/2021/02/tipos-de-graos-de-milho-1024x683.jpg" alt="" />
                            <div className='w-ful h-auto gap-2 flex flex-col justify-center rounded-lg lg:h-80'>
                                <h1 className='text-xl font-medium font-sriracha bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 lg:text-2xl'>Milho</h1>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Plantio 2ª Safra (safrinha): </span>Janeiro a Março</p>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Colheita 2ª Safra (safrinha): </span>Maio a Julho</p>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Detalhe: </span>O milho pode ser cultivado em duas safras no estado. A "safrinha" depende de condições específicas, como a disponibilidade de chuvas no verão.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='rounded-lg w-full h-auto'>
                        <div className='w-full h-auto flex flex-col items-center justify-center lg:h-96 lg:px-12 lg:flex-row lg:gap-6'>
                            <img className='w-56 h-40 rounded-lg lg:w-96 lg:h-80' src="https://img.freepik.com/fotos-premium/agricultor-tem-grao-de-trigo-nas-maos_168410-2670.jpg" alt="" />
                            <div className='w-ful h-auto gap-2 flex flex-col justify-center rounded-lg lg:h-80'>
                                <h1 className='text-xl font-medium font-sriracha bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 lg:text-2xl'>Trigo</h1>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Plantio: </span>Maio a Julho</p>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Colheita: </span>Setembro a Novembro</p>
                                <p className='text-base text-white lg:text-xl'><span className='text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 font-medium lg:text-xl'>Detalhe: </span>O trigo é uma cultura típica de inverno, aproveitando as temperaturas mais amenas e períodos de baixa incidência de pragas.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default End;

