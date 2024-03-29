import {RiDoubleQuotesR} from "@remixicon/react";


// import Swiper core and required modules
import {Pagination, EffectCoverflow} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {GetImage} from "../../utils/GetImage.tsx";

export default function Review() {
    const reviews: string[] = [
        'review-1.jpg',
        'review-2.jpg',
        'review-3.jpg',
        'review-4.jpg',
        'review-5.jpg',
        'review-1.jpg',
        'review-2.jpg',
        'review-3.jpg',
        'review-4.jpg',
        'review-5.jpg'
    ]
    return (
        <section id="review" className="bg-primaryColorLight dark:bg-darkColorLight py-20">
            <div className="container">
                <div className="max-w-md mx-auto text-center mb-6">
                    <h2 className="section__title">Customer Review</h2>
                    <div className="separator mx-auto"></div>
                    <p className="paragraph">
                        Check out the buzz! See what others are raving about us!
                    </p>
                </div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    navigation
                    pagination={{clickable: true}}
                    breakpoints={{
                        640: {slidesPerView: 1, spaceBetween: 20},
                        768: {slidesPerView: 2, spaceBetween: 20},
                        1024: {slidesPerView: 3, spaceBetween: 20},
                    }}
                >
                    {reviews.map((el,index) => {
                        //console.log(el)
                        return (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col gap-5 rounded-lg p-6 bg-primaryColor dark:bg-darkColor">
                                    <p className="paragraph">Some review here here here here here</p>
                                    <div className="flex  items-center ">
                                        <img src={GetImage(el)} className="size-12 rounded-full "/>
                                        <div className="ml-2 ">
                                            <p className="font-oswald uppercase">Name</p>
                                            <p className="paragraph">Profession</p>
                                        </div>
                                        <RiDoubleQuotesR className="size-8 text-secondaryColor  ml-auto"/>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    })
                    }
                </Swiper>
            </div>
        </section>
    )
}
