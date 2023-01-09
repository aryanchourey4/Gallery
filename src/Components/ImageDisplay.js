import React from "react";
import { useState } from "react";
import * as VscIcons from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { changeYear } from "../Redux/yearSlice";
import { changeEvent } from "../Redux/eventSlice";
import { images2022 } from "../Data/ImagesAddress";

export default function ImageDisplay() {
    const event = useSelector((state) => state.event.value);
    const year = useSelector((state) => state.year.value);
    const dispatch = useDispatch();
    const yearsList = [images2022];
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(true);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(yearsList[year][event].images.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    const nextSlide = () => {
        slideNumber + 1 === yearsList[year][event].images.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

    return (
        <>
            <div className="flex items-center flex-col">
                <h1>{yearsList[year][event].title}</h1>
                <p>{yearsList[year][event].desc}</p>
                {openModal && (
                    <div className="sliderWrap">
                        <VscIcons.VscClose className="btnClose" onClick={handleCloseModal}/>
                        <VscIcons.VscChevronLeft className="btnPrev" onClick={prevSlide}/>
                        <VscIcons.VscChevronRight className="btnNext" onClick={nextSlide}/>
                        <div className="fullScreenImage">
                            <img src={yearsList[year][event].images[slideNumber]} alt="" />
                        </div>
                    </div>
                )}
                <div className="masonry mx-20 my-10 sm:masonry-sm md:masonry-md">
                    {yearsList[year][event].images.map((item, index) => {
                        return (
                            <img
                                className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] rounded-lg mb-4 break-inside-avoid"
                                src={item}
                                alt=""
                                key={index}
                                onClick={ () => handleOpenModal(index) }
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
