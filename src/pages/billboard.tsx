import React from 'react';
import { Button, Container } from 
'react-bootstrap';

export const Billboard=()=>{
    return(
        <div className="image-container">
            <img src="/img/portada.jpg" alt="Arcane" className="main-image" />
            <div className="sobre-image">
                <img alt="Arcane Title" src="/img/portada-tittle.png" style={{ maxWidth: '100%', height: 'auto' }} />
                <Container className="text-image">
                    <p style={{ fontWeight:"400", color: "white" }}>
                                Un régimen con aspiraciones utópicas choca contra un mundo suburbano que no se rinde. En el corazón de esta revolución de magia y tecnología, ¿resistirán los lazos familiares?
                    </p>
                </Container>
                <Container className="button-image">
                    <Button variant="light"  style={{ display:"flex",marginRight: "20px" , fontWeight:"600"}}><img style={{marginRight:"5px"}}src="/img/play.png" height="20px" width="20px" alt="Repro"/>Reproducir</Button>
                    <Button variant="secondary" style={{ display:"flex", backgroundColor: 'rgba(200, 200, 200, 0.3)', border: 'none' , fontWeight:"600"}}><img style={{marginRight:"5px"}}src="/img/info.png" height="20px" width="20px" alt="Más información"/>Más información</Button>
                </Container>
                
            </div>
            <span className="etiqueta-edad">16+</span>
        </div>
            

    );
}
export default Billboard;