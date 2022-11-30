import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { GiChiliPepper } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import AdvertisedCar from './AdvertisedCar';
import BookingModal from '../Cars.js/BookingModal';




const Advertised = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedCar, setSelecTedCar] = useState({})
    const { isLoading, error, data, refetch } = useQuery('advertised', () => fetch(`https://carmania-server-render.onrender.com/advertisedcars`).then(res => res.json()))
    if (isLoading) {
        return <p className='mt-5 text-center'>Loading...</p>
    }
    console.log(data);
    return (
        <>
            {data?.length > 0 &&
                <div className='my-5'>
                    <h1 className='text-center pt-5 pb-3 justify-content-center'>Advertised most popular cars! <GiChiliPepper style={{ color: "red" }} /></h1>
                    <div>
                        <Swiper
                            centeredSlides={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 5,
                                },
                                480: {
                                    slidesPerView: 1,
                                    spaceBetween: 5,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 5,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                }
                            }}
                        >
                            {data?.map(car => <SwiperSlide

                            >
                                <AdvertisedCar car={car} setSelecTedCar={setSelecTedCar} handleShow={handleShow} />
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                    <BookingModal show={show} handleClose={handleClose} selectedCar={selectedCar} />
                </div >
            }
        </>
    );
};

export default Advertised;