import React from 'react';
import {Footer} from '../components/footer.js';
import {
    Container,
    Header,
    Card
     } from 'semantic-ui-react';

class About extends React.Component{

    render () {
        return(
            <div id="about">
                <Container className={"aboutText"} style={{marginBottom:"20em", paddingTop:"5em"}} text>
                    
                    
                    <Card style={{paddingTop:"1.8em"}} className="aboutCard">
                        <Header as='h1' style={{color:"black", fontFamily: "barlow, sans-serif"}} content='About Us' />

                        <Card.Content style={{fontFamily: "barlow, sans-serif"}}>
                            Beanstalk. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </Card.Content>
                    </Card>

                </Container>


                <Footer/>
            </div>
        );
    }
  }
  
  export default About;