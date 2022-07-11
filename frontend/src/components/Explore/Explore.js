import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Explore.css";
import "../Section/Section.css";

import europePath from "../../images/europe.png";
import asiaPath from "../../images/asia.png";
import middleEastPath from "../../images/middle-east.png";
import africaPath from "../../images/africa.png";
import australiaAndOceaniaPath from "../../images/australia-and-oceania.png";
import northAmericaPath from "../../images/north-america.png";
import southAmericaPath from "../../images/south-america.png";
import centralAmericaPath from "../../images/central-america.png";
import antarcticaPath from "../../images/antarctica.png";

import SwiperCore, {
    Pagination
} from "swiper/core";
SwiperCore.use([Pagination]);


function Explore(){
    return (
        <div className="explore">
            <h2 className="section__title">Explore the world</h2>
            <p className="section__paragraph">We provide an opportunity to enjoy beautiful
                places from all over the world and create your
                personal travel wishlist based on the.
                Our goal is to demonstrate that the beauty of our world is infinite,
                and give your a chance to create your own unique routes.</p>
            <Swiper
                slidesPerView={3}
                pagination={{
                    clickable: true
                }}
            >
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={europePath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">Europe</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={asiaPath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">Asia</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={middleEastPath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">Middle East</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={africaPath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">Africa</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={australiaAndOceaniaPath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">Australia and Oceania</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={northAmericaPath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">North America</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={southAmericaPath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">South America</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={centralAmericaPath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">Central America</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="explore__card">
                        <img src={antarcticaPath} className="explore__image"/>
                        <div className="section__overlay"/>
                        <a href="#" className="explore__card-link">Antarctica</a>
                    </div>
                </SwiperSlide>


            </Swiper>
            <a href="#" className="explore__link">SEE MORE -></a>
        </div>
    )
}

export default Explore;