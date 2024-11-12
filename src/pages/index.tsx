import Image from "next/image";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Navbar, Nav, Collapse, Dropdown } from 
'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import NavbarNetflix from "./navbar";
//import Carrusel from "./Carrusel";
import CardSlider from "./CardSlider";
import Slider from "react-slick";
import Billboard from "./billboard";
import { useState } from "react";
/*interface Deslizante{
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
}
*/
export default function Home() {
  /*const [deslizante,setdeslizante]=useState<Deslizante[]>([
    {
      titulo:"Series de EE.UU. dobladas al español",
      img1:"/img/us1.jpg",
      img2:"/img/us2.jpg",
      img3:"/img/us3.jpg",
      img4:"/img/us4.jpg",
      img5:"/img/us5.jpg",
      img6:"/img/us6.jpg",
      img7:"/img/us7.jpg",
      img8:"/img/us8.jpg",
      img9:"/img/us9.jpg",
      img10:"/img/us10.jpg",
      img11:"/img/us11.jpg",
      img12:"/img/us12.jpg",

    },
  ]);*/
  return (
    <>
      <link rel="icon" href="favicon.ico"/>
      <NavbarNetflix/>
      <Billboard/>
      <CardSlider titulo="Continuar viendo" img1="/img/continuar1.jpg" img2="/img/continuar2.jpg" img3="/img/continuar3.jpg"img4="/img/continuar4.jpg"img5="/img/continuar5.jpg"img6="/img/continuar6.jpg"img7="/img/continuar7.jpg"img8="/img/continuar8.jpg"img9="/img/continuar9.jpg"img10="/img/continuar10.jpg"img11="/img/continuar11.jpg"img12="/img/continuar12.jpg" barra="confirmado" 
      video1="https://www.youtube.com/embed/Ut4eLNKWCNQ?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0" video2="https://www.youtube.com/embed/zHVCjEUUNOE?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video3="https://www.youtube.com/embed/w1ZHXrMrbkU?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video4="https://www.youtube.com/embed/zVgKnfN9i34?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video5="https://www.youtube.com/embed/YUDbl9qBihk?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video6="https://www.youtube.com/embed/D2MeymJjsIE?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video7="https://www.youtube.com/embed/lQBmZBJCYcY?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video8="https://www.youtube.com/embed/z-pS2sWM0Mk?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video9="https://www.youtube.com/embed/w8GfwrRRbjc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video10="https://www.youtube.com/embed/HyOCCCbxwMQ?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video11="https://www.youtube.com/embed/U7QidLk1INw?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video12="https://www.youtube.com/embed/WB3uaSYh5qo?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      />
      
      <CardSlider titulo="Series de EE.UU. dobladas al español" img1="/img/us1.jpg" img2="/img/us2.jpg" img3="/img/us3.jpg"img4="/img/us4.jpg"img5="/img/us5.jpg"img6="/img/us6.jpg"img7="/img/us7.jpg"img8="/img/us8.jpg"img9="/img/us9.jpg"img10="/img/us10.jpg"img11="/img/us11.jpg"img12="/img/us12.jpg" barra=""
      video1="https://www.youtube.com/embed/PpClX3llCsI?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video2="https://www.youtube.com/embed/sfAc2U20uyg?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video3="https://www.youtube.com/embed/9YkyGz8ErA0?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video4="https://www.youtube.com/embed/MczMB8nU1sY?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video5="https://www.youtube.com/embed/cUnkjEIW2-o?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video6="https://www.youtube.com/embed/6eCoR6vmNzQ?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video7="https://www.youtube.com/embed/F0MvKStmYsI?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video8="https://www.youtube.com/embed/Rq60VlFed-E?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video9="https://www.youtube.com/embed/MvSaUudnUes?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video10="https://www.youtube.com/embed/V_jQt22ODDc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video11="https://www.youtube.com/embed/ETY44yszyNc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video12="https://www.youtube.com/embed/I1hNAIzkQWY?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
/>
      
      <CardSlider titulo="Anime" img1="/img/anime1.jpg" img2="/img/anime2.jpg" img3="/img/anime3.jpg"img4="/img/anime4.jpg"img5="/img/anime5.jpg"img6="/img/anime6.jpg"img7="/img/anime7.jpg"img8="/img/anime8.jpg"img9="/img/anime9.jpg"img10="/img/anime10.jpg"img11="/img/anime11.jpg"img12="/img/anime12.jpg" barra=""
      video1="https://www.youtube.com/embed/araVYtu-RN4?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video2="https://www.youtube.com/embed/jZvFEtR8RH0?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video3="https://www.youtube.com/embed/04WuoQMhhxw?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video4="https://www.youtube.com/embed/Bw-5Lka7gPE?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video5="https://www.youtube.com/embed/lwF1pl0Nufc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video6="https://www.youtube.com/embed/a4na2opArGY?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video7="https://www.youtube.com/embed/st4wcpjZeQQ?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video8="https://www.youtube.com/embed/cfgPnq4sssU?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video9="https://www.youtube.com/embed/Q7w5IMyJ3pM?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video10="https://www.youtube.com/embed/SMAG81A-FYs?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video11="https://www.youtube.com/embed/YFbno_aPm0w?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video12="https://www.youtube.com/embed/dUiDZJMPh-s?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"/>
      <CardSlider titulo="Favoritos familiares" img1="/img/familiar1.jpg" img2="/img/familiar2.jpg" img3="/img/familiar3.jpg"img4="/img/familiar4.jpg"img5="/img/familiar5.jpg"img6="/img/familiar6.jpg"img7="/img/familiar7.jpg"img8="/img/familiar8.jpg"img9="/img/familiar9.jpg"img10="/img/familiar10.jpg"img11="/img/familiar11.jpg"img12="/img/familiar12.jpg" barra=""
      video1="https://www.youtube.com/embed/Dtju_66A53g?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video2="https://www.youtube.com/embed/XNKVMfyyLnU?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video3="https://www.youtube.com/embed/n2Uj-fXZeAQ?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video4="https://www.youtube.com/embed/m1W7fkFmY2Q?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video5="https://www.youtube.com/embed/lpFiEZ-4Vtc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video6="https://www.youtube.com/embed/HlBYdiXdUa8?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video7="https://www.youtube.com/embed/ufs8NhLBuCk?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video8="https://www.youtube.com/embed/hHSZUg-GNMs?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video9="https://www.youtube.com/embed/xRr7oH2PCP0?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video10="https://www.youtube.com/embed/vq-8aIZZZUQ?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video11="https://www.youtube.com/embed/Yi_ukRmpJyc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video12="https://www.youtube.com/embed/JrReIoy0OZM?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"/>
      <CardSlider titulo="Solo en Netflix" img1="/img/solo1.jpg" img2="/img/solo2.jpg" img3="/img/solo3.jpg"img4="/img/solo4.jpg"img5="/img/solo5.jpg"img6="/img/solo6.jpg"img7="/img/solo7.jpg"img8="/img/solo8.jpg"img9="/img/solo9.jpg"img10="/img/solo10.jpg"img11="/img/solo11.jpg"img12="/img/solo12.jpg" barra=""
      video1="https://www.youtube.com/embed/lgZ_IRzmyVc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video2="https://www.youtube.com/embed/7MHsZLXZ_wo?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video3="https://www.youtube.com/embed/IN5TD4VRcSM?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video4="https://www.youtube.com/embed/2PtwviaeZ98?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video5="https://www.youtube.com/embed/elA7XuEUxOo?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video6="https://www.youtube.com/embed/1s1wk3_NWnc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video7="https://www.youtube.com/embed/xniBk7zAKMY?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video8="https://www.youtube.com/embed/2s7YGUVk3BY?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video9="https://www.youtube.com/embed/JoO7TGG2Kms?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video10="https://www.youtube.com/embed/T3F0Nt6ssLU?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video11="https://www.youtube.com/embed/7oI0lHoXZyM?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video12="https://www.youtube.com/embed/X5x5CvACpBc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"/>
      <CardSlider titulo="Películas de Comedia" img1="/img/comedia1.jpg" img2="/img/comedia2.jpg" img3="/img/comedia3.jpg"img4="/img/comedia4.jpg"img5="/img/comedia5.jpg"img6="/img/comedia6.jpg"img7="/img/comedia7.jpg"img8="/img/comedia8.jpg"img9="/img/comedia9.jpg"img10="/img/comedia10.jpg"img11="/img/comedia11.jpg"img12="/img/comedia12.jpg" barra=""
      video1="https://www.youtube.com/embed/ySkQCd7UOhk?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video2="https://www.youtube.com/embed/A2FrrSyyKfA?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video3="https://www.youtube.com/embed/i4noiCRJRoE?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video4="https://www.youtube.com/embed/FNDFd6GrK-A?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video5="https://www.youtube.com/embed/ZIlrPjJeW3k?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video6="https://www.youtube.com/embed/kY3SuNvqQPw?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video7="https://www.youtube.com/embed/2ZMGk_Ml1fc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video8="https://www.youtube.com/embed/Pj0wz7zu3Ms?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video9="https://www.youtube.com/embed/FxXcGZJV7bU?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video10="https://www.youtube.com/embed/uldqs2kW25g?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video11="https://www.youtube.com/embed/Z2HvoxkrIxI?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"
      video12="https://www.youtube.com/embed/vDqQ-smbqHc?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&mute=0"/>
      <footer>
        <div className="footericons" style={{display:"flex"}}>
          <img src="/img/facebook.png" width={23} height={23} style={{marginRight:"20px"}}/>
          <img src="/img/instagram.png" width={23} height={23} style={{marginRight:"20px"}}/>
          <img src="/img/twitter.png" width={23} height={23} style={{marginRight:"20px"}}/>
          <img src="/img/youtube.png" width={23} height={23} style={{marginRight:"20px"}}/>
        </div>
          © 1997-2024 Netflix, Inc.</footer>
    </>
  );
}
