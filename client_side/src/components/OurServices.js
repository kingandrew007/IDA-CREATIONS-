import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/OurServices.css';

function OurServices() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id='services'>
      <h1 style={{color:"rgb(254, 254, 147)", fontSize:"40px", textAlign: "center"}}>Our Services</h1>
      <div className="swiper-outer">
        <swiper-container class="mySwiper" effect="cards" grab-cursor="true">
          <swiper-slide>
            <img src="https://idacreations.com/img/cpu_888995.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>Generative AI</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/3d-model_14189680.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>3D Modeling/Rendering</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/computer_10940047.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>2D/3D Animation</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/workplace_8170939.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>Motion Graphics</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/visual-effect_3879988.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>VFX</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/virtual-reality_1377790.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>AR/VR/MR/XR</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/studio_9200070.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>Virtual Production</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/production_13136249.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>CG</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/ux-design_7889802.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>UI/UX</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/team_2083290.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>Academic Alliances</p>
          </swiper-slide>
          <swiper-slide>
            <img src="https://idacreations.com/img/film-editing_4035077.png" alt="" />
            <p style={{fontSize:"22px", color:"white", marginTop:"20px"}}>Video Editing</p>
          </swiper-slide>
        </swiper-container>

        <div className='side-images'>
          <Slider {...settings}>
            <div>
              <img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg" alt="" />
            </div>
            <div>
              <img src="https://imageio.forbes.com/specials-images/imageserve/633680e9f575e0775e377afd/0x0.jpg?format=jpg&crop=2808,1579,x191,y0,safe&height=900&width=1600&fit=bounds" alt="" />
            </div>
            <div>
              <img src="https://3d-ace.com/wp-content/uploads/the_difference_between_3d_modeling_and_3d_rendering.jpg" alt="" />
            </div>
            <div>
              <img src="https://www.reallusion.com/cartoon-animator/includes/images/converter/3D-motion-to-2D.jpg" alt="" />
            </div>
            <div>
              <img src="https://cubicleninjas.com/wp-content/uploads/2019/09/motion-graphics-examples.jpg" alt="" />
            </div>
            <div>
              <img src="https://i.ytimg.com/vi/eL0E_07UqeQ/maxresdefault.jpg" alt="" />
            </div>
            <div>
              <img src="https://s.studiobinder.com/wp-content/uploads/2023/02/What-is-Virtual-Production-Virtual-Film-Production.png" alt="" />
            </div>
            <div>
              <img src="https://images.squarespace-cdn.com/content/v1/54851541e4b0fb60932ad015/1496645800597-N02J164ZYAE4X4PJZTKY/image-asset.png" alt="" />
            </div>
            <div>
              <img src="https://community.nasscom.in/sites/default/files/media/images/What%20is%20UIUX%20Transformation%20and%20How%20Does%20it%20Benefit%20Businesses-04_0.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
