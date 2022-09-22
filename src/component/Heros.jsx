import React from "react";
import logo from '../images/images.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Heros = () => {
    useEffect(() => {
        AOS.init(
            {
                offset: 200,
                duration: 700,
                easing: 'ease-in-sine',
                delay: 100,
            }
        );
        
    }, []);
    const hello = "Hi, I'am  Rizwan Gustama";
    const position = "Front End Developer.";
    
    return (
        <div className="heros">
            <div className="container">
                <div className="flex min-h-screen flex-col-reverse md:flex-row justify-center md:justify-between items-center py-20">
                    <div className="wrapper-title">
                        <h1 data-aos="fade-up" data-aos-delay="100" className="title text-3xl md:text-6xl text-center md:text-left font-bold leading-normal">{ hello }</h1>
                        <h1 data-aos="fade-up" data-aos-delay="200" className="title text-3xl md:text-6xl text-center md:text-left font-bold leading-normal">{position}</h1>
                        <p data-aos="fade-up" data-aos-delay="600" className="w-full md:max-w-2xl text-white text-sm text-center md:text-left md:text-xl leading-relaxed mt-6">I’m also a front-end developer and general doodler with a keen eye for creating engaging UI, bringing products to life.</p>
                    </div>
                    <img data-aos="fade-up" data-aos-delay="400"  className="h-28 md:h-[400px]" src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Heros;