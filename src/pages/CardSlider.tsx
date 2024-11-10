import React from 'react';
import Slider from 'react-slick'; 

const Carousel = () => {
  const settings = {
    dots: true,  // Muestra los puntos de navegación
    infinite: true,  // Hace que sea infinito
    speed: 500,  // Tiempo de transición entre elementos
    slidesToShow: 5,  // Número de elementos a mostrar al mismo tiempo
    slidesToScroll: 1,  // Cuántos elementos se desplazan al hacer scroll
    responsive: [
      {
        breakpoint: 1024,  // Para pantallas grandes
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,  // Para pantallas medianas
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,  // Para pantallas pequeñas
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
       <h2>Recomendado para ti</h2> 
       
      <Slider {...settings}>
        {}
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/5wducarmueomnh1wkca65pputxv-66ab60c945d48.jpg?crop=1xw:1xh;center,top&resize=980:*/150" />
        </div>
        <div>
          <img src="https://media.revistagq.com/photos/66d03c2dbf5ddbc2c29dfc2b/master/w_1600%2Cc_limit/aku_wa_sonzai_shinai_ver2_xxlg.jpg/150" />
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/baby-reindeer-582365873-large-66aeda37dc5a8.jpg?crop=1xw:1xh;center,top&resize=980:*/150"  />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/M/MV5BMTlmZjg1ZDctNjkwMi00NzU2LWFlYWMtZjdkMzMxYjViYmNhXkEyXkFqcGc@._V1_.jpg/150"  />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/M/MV5BNTE1NmU1OTAtOGZhNC00ZmU4LWJiYWMtNGIzMjEzNzg0MGFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg/150"  />
        </div>
        <div>
          <img src="https://media.revistagq.com/photos/633f024e2de46730aa112424/master/w_1600%2Cc_limit/midnight_club_ver2.jpg/150"  />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
