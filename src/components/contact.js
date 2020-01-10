import React from 'react';
import {Footer} from '../components/footer.js';
import {
    Container,
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
            <div id="contact">
                <Container className={"maincontainer"} style={{marginBottom:"5.5em"}} centered='true'>
                    <Header as='h1' content='Contact' style={{ marginTop: '1em', marginBottom:'0.6em' }}/>
                    <p>Got any inquiries, comments, reccomendations? Let us know!</p>

                    <Form className={"maincontainer"} centered='true' onSubmit={this.getData()} size='large' style={{width:'40em', marginLeft:'15em'}}>
                        <Form.Group className={"maincontainer"} widths='equal'>
                            <Form.Input className={"maincontainer"} fluid label='Name' placeholder='Name' />
                            <Form.Input fluid icon='mail' label='Email' placeholder='Email' />
                        </Form.Group>
                        <Form.TextArea style={{height:'10em'}}label='Message' placeholder='Your message...' />
                        <Form.Button>Submit</Form.Button>
                    </Form>                        
                </Container>
                <Footer/>
            </div>
        );
    }
  }
  
  export default Contact;