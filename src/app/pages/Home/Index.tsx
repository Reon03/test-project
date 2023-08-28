import React from 'react';
import './styles.scss'
import Header from '../../components/Header';
import { BsCartCheck } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { TbLogin } from 'react-icons/tb'
import images from '../Home/images/images1.png'
import logo from '../Home/Logo/Vector.svg'


const SlideData = [
  {
    title: "LET'S MAKE A BETTER PLANET",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    imagePath: images,
  },
  {
    title: "LET'S MAKE A BETTER PLANET",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    imagePath: images,
  },
  {
    title: "LET'S MAKE A BETTER PLANET",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    imagePath: images,
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <header className="header" id="header">
      <a href="#" className="logo">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.15 0C7.67748 0 0 7.67746 0 17.15C0 26.0201 6.73548 33.3175 15.3711 34.207C14.8496 29.9134 15.0436 26.4001 15.7067 23.5135C15.3347 21.7225 14.4898 19.0703 12.5734 17.1864C12.5734 17.1864 13.8348 19.0784 14.5181 21.6214C14.5181 21.6255 14.5221 21.6295 14.5221 21.6335C14.5949 21.9044 14.6596 22.1793 14.7162 22.4623C14.7283 22.527 14.7404 22.5917 14.7526 22.6604C14.8051 22.9515 14.8536 23.2426 14.886 23.5418C5.19513 22.3532 3.12921 13.6569 3.35561 10.3781C13.665 10.9482 15.7754 17.8292 16.0827 22.0985C19.4585 11.0412 30.1843 10.4024 31.0697 10.3781C31.4538 18.8763 25.1509 25.5026 17.6149 26.0807C17.6635 25.8503 17.7201 25.6198 17.7767 25.3934C17.7928 25.3247 17.813 25.26 17.8333 25.1913C17.8777 25.0296 17.9222 24.8679 17.9748 24.7061C17.995 24.6374 18.0192 24.5646 18.0394 24.4959C18.096 24.318 18.1567 24.1442 18.2173 23.9663C18.2335 23.9259 18.2456 23.8854 18.2618 23.845C18.3386 23.6348 18.4195 23.4326 18.5003 23.2305C18.5084 23.2143 18.5125 23.1941 18.5205 23.1779C18.5205 23.1779 18.5205 23.1779 18.5246 23.1779C20.4571 18.5043 24.0229 15.4439 24.0229 15.4439C17.0247 19.4868 15.8441 29.9983 15.6582 34.2231C16.1514 34.2676 16.6446 34.2999 17.15 34.2999C26.6225 34.2999 34.3 26.6225 34.3 17.15C34.3 7.67746 26.6225 0 17.15 0Z" fill="#46A358" />
          </svg>
          GREENSHOP
        </a>
        <nav className="navv">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Plant Care</a>
          <a href="#">Blogs</a>
        </nav>

        <div className="icon">
          <i className="icon-item search"><BiSearch /></i>
          <i className="icon-item cart"><BsCartCheck /></i>
          <i className="icon-item login"><TbLogin /> </i>
      
        </div>

      </header>

      <section className="home" id="home">
        <div className="home-slider">
          <div className="wrapper">
            {SlideData.map((slide, index) => (
              <div className="slide">
                <div className="content">
                  <div className="text-container"> {/* Yeni div */}
                    <div className="text-content"> {/* Yeni div  */}
                      <span>WELCOME TO GREENSHOP</span>
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <a href="#" className="btn">SHOP NOW</a>
                    </div>
                    <div className="images">
                      <img src={images} alt={`Imags`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
