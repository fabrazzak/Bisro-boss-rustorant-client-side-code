import { Swiper, SwiperSlide } from 'swiper/react';
import './Category.css';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"

import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const Category = ( ) => {

    const swiperParams = {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      clickable: true,
    },
    modules: [Pagination],
    className: 'mySwiper',
    onInit: (swiper) => {
      // Set the first three slides as active on initialization
      swiper.slideTo(2, 0); // 0-based index, so 2 corresponds to the third slide
    },
  };

  


   


    return (
        <div className='md:container mx-auto mb-10'>

            <Swiper {...swiperParams}>

    <SwiperSlide> 
        <img src={img1} alt="" />
        <h1 className='-mt-20 pb-16 text-4xl text-white'>Salads</h1>
    </SwiperSlide> <SwiperSlide> 
        <img src={img2} alt="" />
        <h1 className='-mt-20 pb-16 text-4xl text-white'>Soups</h1>
    </SwiperSlide > <SwiperSlide defaultValue={true}> 
        <img src={img3} alt="" />
        <h1 className='-mt-20 pb-16 text-4xl text-white'>Pizzas</h1>
    </SwiperSlide> <SwiperSlide> 
        <img src={img4} alt="" />
        <h1 className='-mt-20 pb-16 text-4xl text-white'>Desserts</h1>
    </SwiperSlide> <SwiperSlide> 
        <img src={img5} alt="" />
        <h1 className='-mt-20 pb-16 text-4xl text-white'>Salads</h1>
    </SwiperSlide>

      </Swiper>


      <section>
        <SectionTitle  subTitle={"---From 11:00am to 10:00pm---"} mainTitle={"ORDER ONLINE"}></SectionTitle>
      </section>

            
        </div>
    );
};

export default Category;