import React from 'react';
import {Footer} from '../components/footer.js';
import {
    Segment,
    Container,
    Grid,
    Divider,
    Icon,
    Header,
    Form
     } from 'semantic-ui-react';

class Contact extends React.Component{

    getData =  () =>{
        let data = fetch('https://kingsdinerbackend.herokuapp.com/');
        console.log(data);
    }

    render () {
        return(
            <div id="contact" style={{body: "100%"}}>
                <Segment id={"contact"} vertical centered='true'>
                    <Container centered='true'>
        
                        <Header as='h1' content='Contact' style={{ marginTop: '1.82em', marginBottom:'2em' }}/>

                        <Form centered='true' onSubmit={this.getData()} size='large' style={{width:'40em', marginLeft:'15em'}}>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Name' placeholder='Name' />
                                <Form.Input fluid icon='mail' label='Email' placeholder='Email' />
                            </Form.Group>
                            <Form.TextArea style={{height:'10em'}}label='Message' placeholder='Your message...' />
                            <Form.Button>Submit</Form.Button>
                        </Form>                        
                    </Container>
                </Segment>
                <Footer/>
            </div>
        );
    }
  }
  
  export default Contact;