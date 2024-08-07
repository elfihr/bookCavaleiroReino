
import '../style/Testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react';
//==================Import Swiper styles==================
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { testimonials } from '../helper/helper';

const Testimonials = () => {
  return (
    <section className='testimonials' id='depoimento'>
      <h3 className='title'>&#x268A;&#x26AC; Depoimentos &#x26AC;&#x268A;</h3>
      <div className='testimonials_wrapper'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          
          }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
     
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <p className='testimonialsDescription description'>{client.description}</p>
                <span className='goldborderImg'>
                  <img  src={client.img} className='testimonialsImg' alt='depoimentos'></img>
                </span>
                <p className='description'>{client.name}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

    </section>
  )
}

export default Testimonials