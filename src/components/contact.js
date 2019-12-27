import React from 'react';
import { StyleSheet, css } from 'aphrodite';
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

    styles = StyleSheet.create({
        iconmini: {
            fontSize: '0.8em',

        },

        backgroundIm: {
            backgroundImage: '/images/frontView.png'
        },
    
        blue: {
            backgroundColor: 'blue'
        },
    
        hover: {
            ':hover': {
                backgroundColor: 'red'
            }
        },
    
        small: {
            '@media (max-width: 600px)': {
                backgroundColor: 'red',
            }
        }
    });

    getData =  () =>{
        let data = fetch('https://kingsdinerbackend.herokuapp.com/');
        console.log(data);
    }

    render () {
        return(
            <Segment vertical centered>
                <Container centered>
                        <Divider section />
        
                            <Header as='h1' content='Contact' style={{ marginTop: '1.82em', marginBottom:'2em' }}/>

                            <Form centered onSubmit={this.getData()} size='large' style={{width:'40em', marginLeft:'15em'}}>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Name' placeholder='Name' />
                                    <Form.Input fluid icon='mail' label='Email' placeholder='Email' />
                                </Form.Group>
                                <Form.TextArea style={{height:'10em'}}label='Message' placeholder='Your message...' />
                                <Form.Button>Submit</Form.Button>
                            </Form>
                            <Header as="h5" style={{marginTop:'19em'}}>
                                King's Diner <Icon className={css(this.styles.iconmini)} name='copyright outline' size="mini" fitted/> 2019
                            </Header>
                    
                </Container>
            </Segment>
        );
    }
  }
  
  export default Contact;