import SwiperCore, { Pagination, Navigation } from 'swiper';

// Import Swiper React components
import { Swiper as SwiperElement, SwiperSlide } from 'swiper/react';

import { SliderItem } from './SliderItem';

SwiperCore.use([Pagination, Navigation])

export const ContinentSlider = () => {
  return (
    <SwiperElement
      spaceBetween={20}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        
      }}
      pagination={{ 
        clickable: true,
        type: 'bullets'
       }}
      style={{cursor: 'pointer'}}
    >
      
      <div className='swiper-button-next'></div>
      <div className='swiper-button-prev'></div>
      <SwiperSlide>
        <SliderItem href='/europe' imageURL='/Europe.svg' title='Europa' subtitle='O continente mais antigo' />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem href='/' imageURL='/america4.jpg' title='America do norte' subtitle='Viva o sonho americano' />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem href='/' imageURL='/brasil.jpg' title='America do sul' subtitle='Conheça as melhores praias' />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem href='/' imageURL='/asia.jpg' title='Asia' subtitle='Conheça os grandes imperios' />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem href='/' imageURL='/africa.jpg' title='Africa' subtitle='Conheça o mundo selvagem' position='bottom' />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem href='/' imageURL='/oceania.jpg' title='Oceania' subtitle='O lar dos kangurus & koalas' />
      </SwiperSlide>

    </SwiperElement>
  );
};