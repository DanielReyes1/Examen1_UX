import React from 'react';
import Slider from 'react-slick'; 
import ProgressBar from 'react-bootstrap/ProgressBar';
interface CarouselProps{
  titulo:string;
  img1:string;
  img2:string;
  img3:string;
  img4:string;
  img5:string;
  img6:string;
  img7:string;
  img8:string;
  img9:string;
  img10:string;
  img11:string;
  img12:string;
  barra: string;

}
const Carousel = ({titulo,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,barra}:CarouselProps) => {
  
  const settings = {
    dots: true,  // Muestra los puntos de navegación
    infinite: true,  // Hace que sea infinito
    speed: 500,  // Tiempo de transición entre elementos
    slidesToShow: 6,  // Número de elementos a mostrar al mismo tiempo
    slidesToScroll: 6,  // Cuántos elementos se desplazan al hacer scroll
    responsive: [
      {
        breakpoint: 1024,  // Para pantallas grandes
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, 
        }
      },
      {
        breakpoint: 600,  // Para pantallas medianas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
        }
      },
      {
        breakpoint: 480,  // Para pantallas pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      }
    ]
  };

  return (
    <div className="carousel-container" style={{backgroundColor:"rgb(10,10,10)"}}>
       <p style={{paddingTop:"40px",paddingLeft:"28px"}}>{titulo}</p> 
       <div className="slider-wrapper" style={{ padding: "0 30px" }}>
        <Slider {...settings}>
          {}
          <div>
            <img src={img1} width={340} height={190} style={{paddingRight:"10px", borderRadius:"15px"}}/>
            {barra && <ProgressBar variant="danger" now={80} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
                
          </div>
          <div>
            <img src={img2} width={340} height={190} style={{paddingRight:"10px", borderRadius:"15px"}}/>
            {barra && <ProgressBar variant="danger" now={50} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img3} width={340} height={190}style={{paddingRight:"10px", borderRadius:"15px"}} />
            {barra && <ProgressBar variant="danger" now={30} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img4}width={340} height={190}style={{paddingRight:"10px", borderRadius:"15px"}}/>
            {barra && <ProgressBar variant="danger" now={90} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img5}width={340} height={190} style={{paddingRight:"10px", borderRadius:"15px"}}/>
            {barra && <ProgressBar variant="danger" now={10} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img6} width={340} height={190} style={{paddingRight:"10px", borderRadius:"15px"}}/>
            {barra && <ProgressBar variant="danger" now={30} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img7}width={340} height={190}style={{paddingRight:"10px", borderRadius:"15px"}} />
            {barra && <ProgressBar variant="danger" now={70} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img8} width={340} height={190}style={{paddingRight:"10px", borderRadius:"15px"}} />
            {barra && <ProgressBar variant="danger" now={50} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img9} width={340} height={190}style={{paddingRight:"10px", borderRadius:"15px"}} />
            {barra && <ProgressBar variant="danger" now={20} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img10} width={340} height={190}style={{paddingRight:"10px", borderRadius:"15px"}} />
            {barra && <ProgressBar variant="danger" now={90} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img11} width={340} height={190}style={{paddingRight:"10px", borderRadius:"15px"}} />
            {barra && <ProgressBar variant="danger" now={40} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
          <div>
            <img src={img12} width={340} height={190}style={{paddingRight:"10px", borderRadius:"15px"}} />
            {barra && <ProgressBar variant="danger" now={30} className="barrita"  style={{height:"5px",width:"150px",backgroundColor:"rgb(88,88,88)"}}/>}
          </div>
        </Slider>
        </div>
    </div>
  );
};

export default Carousel;
