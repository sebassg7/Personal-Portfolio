import { useEffect, useState } from 'react';

import headerImg from '../assets/img/header-img.svg'

import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState( 0 );
    const [isDeleting, setIsDeleting] = useState( false );
    const toRotate = ["Web Developer", "Frontend Developer", "React"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState( 300 - Math.random() * 100 );
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval( () => {
            tick();
        }, delta )

        return () => { clearInterval( ticker ) }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring( 0, text.length - 1 ) : fullText.substring( 0, text.length + 1 );
    
        setText( updatedText );

        if( isDeleting ){
            setDelta( prevDelta => prevDelta/2 )
        }

        if( !isDeleting && updatedText === fullText ){
            setIsDeleting( true );
            setDelta( period );
        } else if ( isDeleting && updatedText === ''){
            setIsDeleting( false );
            setLoopNum( loopNum + 1 );
            setDelta( 500 );
        }
    };
    

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="aligh-items-center">
                <Col xs={ 12 } md={ 6 } xl={ 7 }>
                    <span className='tagline' >Bienvenido a mi Portfolio</span>
                    <h1>{ `Hola soy Sebastián ` } <span className="wrap">{text}</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime provident beatae saepe recusandae facere. Fugit culpa ullam eveniet blanditiis nesciunt, labore deleniti dolorum ipsa, ratione quaerat possimus distinctio, magnam architecto?</p>
                    <button onClick={ () => console.log( 'connect' )}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>

                <Col xs={ 12 } md={ 6 } xl={ 7 }>
                        <img src={ headerImg } alt="Headder Img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}


