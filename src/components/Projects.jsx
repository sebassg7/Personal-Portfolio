import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {

    const projects = [
        {
            title: "JournalApp",
            description: "Frontend aplication",
            imgUrl: projImg1,
        },
        {
            title: "JournalApp",
            description: "Frontend aplication",
            imgUrl: projImg2,
        },
        {
            title: "JournalApp",
            description: "Frontend aplication",
            imgUrl: projImg3,
        },
        {
            title: "JournalApp",
            description: "Frontend aplication",
            imgUrl: projImg1,
        },
        {
            title: "JournalApp",
            description: "Frontend aplication",
            imgUrl: projImg3,
        }
    ];

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis odio delectus error mollitia similique numquam expedita consequuntur quo dicta perspiciatis perferendis sunt distinctio libero, ipsum praesentium ducimus deserunt! Veritatis, asperiores?</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map( ( project, index ) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    } )
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-rigth" src={ colorSharp2 } />
    </section>
    
  )
}
