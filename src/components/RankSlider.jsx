import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import  { useEffect, useRef, useState } from 'react'
import one from '../assets/01Img.webp'
import Two from '../assets/02Img.webp'
import Three from '../assets/03Img.webp'
import Four from '../assets/04Img.webp'
import Five from '../assets/05Img.webp'
import Six from '../assets/06Img.webp'
import Seven from '../assets/07Img.webp'
import Eight from '../assets/08Img.webp'
import Nine from '../assets/09Img.webp'
import Ten from '../assets/10Img.webp'
import Eleven from '../assets/11Img.webp'
import Twelve from '../assets/12Img.webp'
import ImageComponent from './ImageComponent';


const RankSlider = () => {
    const imgRefs = Array.from({ length: 12}, () => useRef(null));
    const [arr] = useState([{ rank: "#01", image: one, title: "Travel Buddy" },
    { rank: "#02", image: Two, title: "The Not So Solo, Solo Travel" },
    { rank: "#03", image: Three, title: "Weather the funs AT" },
    { rank: "#04", image: Four, title: "Ready. Set." },
    { rank: "#05", image: Five, title: "Events Worth traveling to in 2024" },
    { rank: "#06", image: Six, title: "Discover Wot's Next" },
    { rank: "#07", image: Seven, title: "Instagram Photography" },
    { rank: "#08", image: Eight, title: "Not All Languages Is Created Equal" },
    { rank: "#09", image: Nine, title: "School Life Essentials" },
    { rank: "#10", image: Ten, title: "Make the city Your Playground" },
    { rank: "#11", image: Eleven, title: "Colours your life" },
    { rank: "#12", image: Twelve, title: "Our brand story" }])
    const [change, setChange] = useState(null);
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 850) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(4);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="relative">
                <div className="rankGradient absolute"></div>
                <Swiper style={{ marginTop: "40px", padding: "55px" }}
                    centeredSlides={true}
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    loop={true}
                    onSlideChange={() => {
                        setTimeout(() => {
                            imgRefs.forEach((item) => { 
                                if (item.current.className.includes('active')) {
                                    item.current.classList.add('upClass');
                                    setChange(Math.random())
                                }
                            });
                        }, 0);
                    }}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {arr.map((obj, i) => <SwiperSlide ref={imgRefs[i]} key={i}><ImageComponent change={change} obj={obj} /></SwiperSlide>)}
                </Swiper>
            </div>
        </>
    )
}

export default RankSlider

