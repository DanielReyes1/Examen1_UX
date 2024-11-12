import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; 
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Card } from 'react-bootstrap';

interface CarouselProps {
  titulo: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
  img8: string;
  img9: string;
  img10: string;
  img11: string;
  img12: string;
  video1?: string;
  video2?: string;
  video3?: string;
  video4?: string;
  video5?: string;
  video6?: string;
  video7?: string;
  video8?: string;
  video9?: string;
  video10?: string;
  video11?: string;
  video12?: string;
  barra: string;
}

const Carousel = ({
  titulo,
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
  barra,
  video1, video2, video3, video4, video5, video6, video7, video8, video9, video10, video11, video12
}: CarouselProps) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [progressValues, setProgressValues] = useState<number[]>([]); 
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Para la barra de progreso
  useEffect(() => {
    if (barra) {
      const randomValues = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
      setProgressValues(randomValues);
    }
  }, [barra]);

  const handleMouseEnter = (index: number) => {
    // Si el video ya está en hover, no hacemos nada
    if (isHovered !== index) {
      setIsHovered(index);
    }
  };

  const handleMouseLeave = () => {
    // Resetear el hover
    setIsHovered(null);
  };

  const videoDisplay = (imagen: string, vid: string, index: number) => {
    return (
      <div style={{ position: 'relative', width: '237px', height: '157px' }}>
        <Card
          style={{
            width: '100%',
            height: '100%',
            transition: 'transform 0.3s ease-in-out',
            zIndex: isHovered === index ? 10 : 1,
            transform: isHovered === index ? 'scale(1.2)' : 'scale(1)',
            backgroundColor: "rgb(10,10,10)",
            borderRadius: '5px',
            overflow: 'hidden'
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Card.Body style={{ padding: 0 }}>
            {/* Imagen */}
            <Card.Img
              src={imagen}
              style={{
                display: isHovered === index ? 'none' : 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover' 
              }}
            />
            {/* Video */}
            {isHovered === index && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}>
                <iframe
                  title={`Video-${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  src={`${vid}?autoplay=1&mute=0`} // Añadimos autoplay y mute al URL
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className="carousel-container" style={{ backgroundColor: "rgb(10,10,10)" }}>
      <p style={{ paddingTop: "40px", paddingLeft: "28px" }}>{titulo}</p>
      <div className="slider-wrapper" style={{ padding: "0 30px" }}>
        <Slider {...settings}>
          {/* Mapeo de imágenes y videos */}
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map((img, index) => {
            const video = [
              video1, video2, video3, video4, video5, video6, video7, video8, video9, video10, video11, video12
            ][index]; // Video correspondiente

            return (
              <div key={index}>
                {videoDisplay(img, video || '', index)}
                {barra && progressValues[index] !== undefined && (
                  <ProgressBar
                    variant="danger"
                    now={progressValues[index]} // Usamos el valor único para cada barra
                    className="barrita"
                    style={{
                      height: "5px",
                      width: "150px",
                      backgroundColor: "rgb(88,88,88)"
                    }}
                  />
                )}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
