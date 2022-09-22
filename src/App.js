// import logo from './logo.svg';
import './index.css';
import CardList from './component/CardList.jsx';
import Heros from './component/Heros';
import SkillList from './component/SkillList';
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaDribbble, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
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
  
  const name = "rizwangustama.my.id"
  return (
    <div className="App">
      
      {/* <header className='bg-lightDark py-5'>
        <div class="container">
          <menu>
            <ul className='flex justify-center gap-5'>
              <li className='py-3 text-white text-xl'>Home</li>
              <li className='py-3 text-white text-xl'>About</li>
              <li className='py-3 text-white text-xl'>Contact</li>
              <li className='py-3 text-white text-xl'>Portofolio</li>
            </ul>
          </menu>
        </div>
      </header> */}

      <Heros />
      <SkillList/>
      {/* <CardList /> */}
      <footer className='bg-lightDark mt-5'>
        <div class="container">
          <div class="flex min-h-screen justify-center items-center">
            <div class="wrapper-content">
              <h1 data-aos="fade-up" data-aos-delay="100" className='title text-3xl md:text-6xl text-center font-bold leading-tight md:leading-snug'>I occasionally take on</h1>
              <h1 data-aos="fade-up" data-aos-delay="300" className='title text-3xl md:text-6xl text-center font-bold leading-tight md:leading-snug'>freelance opportunities.</h1>
              <p data-aos="fade-up" data-aos-delay="600" className='text-white text-sm md:text-2xl text-center max-w-2xl mt-7 mx-auto leading-relaxed'>Have an exciting project where you need some help? Send me over a message, and let's <a href="https://wa.me/6285523951105" className='underline'>chat.</a></p>
              </div>
            </div>
        </div>
        <div class="footer-bottom bg-dark py-10">
          <div class="container">
            <div class="flex justify-center gap-5 md:gap-10 flex-wrap">
            <a className='p-3 bg-lightDark sm:bg-transparent hover:bg-lightDark rounded-lg transition duration-200' href="https://id.linkedin.com/in/rizwan-gustama-692b81179">
              <IconContext.Provider value={{ color: 'white', size: '24px' }}>
                  <FaLinkedinIn />
                </IconContext.Provider>
              </a>

              <a className='p-3 bg-lightDark sm:bg-transparent hover:bg-lightDark rounded-lg transition duration-200' href="https://github.com/rizwangustama">
              <IconContext.Provider value={{ color: 'white', size: '24px' }}>
                <FaGithub/>
                </IconContext.Provider>
                </a>
              
              <a className='p-3 bg-lightDark sm:bg-transparent hover:bg-lightDark rounded-lg transition duration-200' href="https://www.facebook.com/gustama.rizwan">
                <IconContext.Provider value={{ color: 'white', size: '24px' }}>
                    <FaFacebookF />
                </IconContext.Provider>
              </a>
                
              
             

                <a className='p-3 bg-lightDark sm:bg-transparent hover:bg-lightDark rounded-lg transition duration-200' href="https://twitter.com/rizwan_gustama">
                <IconContext.Provider value={{ color: 'white', size: '24px' }}>
                  <FaTwitter />
                </IconContext.Provider>
                </a>
              
              <a className='p-3 bg-lightDark sm:bg-transparent hover:bg-lightDark rounded-lg transition duration-200' href="https://www.instagram.com/rizwan.gustama/">
              <IconContext.Provider value={{ color: 'white', size: '24px' }}>
                  <FaInstagram />
                </IconContext.Provider>
                </a>

              

              <a className='p-3 hidden sm:flex bg-lightDark sm:bg-transparent hover:bg-lightDark rounded-lg transition duration-200' href="https://dribbble.com/rizwangustama">              <IconContext.Provider value={{ color: 'white', size: '24px' }}>
                <FaDribbble/>
              </IconContext.Provider>
              </a>

              
             
              
              </div>        
            {/* <p className='text-center text-white'>Copyright &copy; 2022</p> */}
          </div>  
        </div>
      </footer>
    </div>
  );
}

export default App;
