import nodejs from "../images/nodejs.svg";
import logoReact from "../images/reactjs.svg";
import logovuejs from "../images/vuejs.svg";
import logogithub from "../images/github.svg";
import logoyarn from "../images/yarn.svg";
import netlify from "../images/netlify.svg";
import logoNuxtjs from "../images/nuxtjs.svg";
import tailwind from "../images/tailwind.svg";
import LogoSass from '../images/sass.svg';
import LogoJavaScript from '../images/javascript.svg';
import LogoTypescript from '../images/typescript.svg'
import LogoJquery from '../images/jquery.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const SkillList = () => {
    useEffect(() => {
        AOS.init(
            {
                offset: 200,
                duration: 400,
                easing: 'ease-in-sine',
                delay: 100,
            }
        );
        
    }, []);
    const skill = [
        {
            logo: logoReact,
            name: 'ReactJs',
            duration: '100'
        },
        {
            logo: logovuejs,
            name: 'Vuejs',
            duration: '200'
        },
        {
            logo: logogithub,
            name: 'Github',
            duration: '300'
        },
        {
            logo: nodejs,
            name: 'Nodejs',
            duration: '400'
        },
        {
            logo: logoyarn,
            name: 'Yarn',
            duration: '500'
        },
        {
            logo: netlify,
            name: 'Netlify',
            duration: '600'
        },
        {
            logo: logoNuxtjs,
            name: 'NuxtJs',
            duration: '700'
            
        },
        {
            logo: tailwind,
            name: 'Tailwind',
            duration: '800'
        },
        {
            logo: LogoSass,
            name: 'Sass',
            duration: '900'
        },
        {
            logo: LogoJavaScript,
            name: 'JavaScript',
            duration: '1000'
        },
        {
            logo: LogoTypescript,
            name: 'TypeScript',
            duration: '1100'
        }
        , {
            logo: LogoJquery,
            name: 'Jquery',
            duration: '1200'
        }
    ];
    return (
        <div className="skill-list py-20">
            <div className="container">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
                {skill.map((listSkill) => 
                    <div  data-aos="fade-up" data-aos-duration="400" data-aos-delay={ listSkill.duration } className="card p-6 bg-lightDark cursor-pointer hover:bg-dark transition-all duration-300 flex justify-center gap-4 md:gap-6 items-center">
                        <img src={listSkill.logo} className="h-8 sm:h-10" alt={listSkill.name} />
                        <h1 className="text-white text-center" key={listSkill}>
                            {listSkill.name}
                        </h1>
                    </div>
                    )} 
                </div>
            </div>
        </div>
    )

}
export default SkillList;