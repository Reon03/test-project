import React from 'react';
import './styles.scss'
import Header from '../../components/Header';
import { BsCartCheck } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { TbLogin } from 'react-icons/tb'
import images from '../Home/images/images1.jpg'
import { Carousel } from 'react-responsive-carousel';




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
        <a href="#" className="logo"><i className="fa-solid fa-leaf"></i>GREENSHOP</a>
        <nav className="navv">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Plant Care</a>
          <a href="#">Blogs</a>
        </nav>

        <div className="icon">
          <i><BiSearch /></i>
          <i><BsCartCheck /></i>
          <i><TbLogin /></i>
        </div>




      </header>


      <section className="home" id="home">
        <div className="home-slider">
          <div className="wrapper">


            {SlideData.map((slide, index) => (
              <div className="slide">
                <div className="content">
                  <span>WELCOME TO GREENSHOP</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <a href="#" className="btn">SHOP NOW</a>
                  <div className="images">
                    <img src={images} alt={`Imags`} />
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
