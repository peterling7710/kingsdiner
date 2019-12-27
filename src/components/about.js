import React from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import {
    Segment,
    Container,
    Grid,
    Divider,
    Icon,
    Header,
    Image
     } from 'semantic-ui-react';

class About extends React.Component{

    styles = StyleSheet.create({
        iconmini: {
            fontSize: '0.8em',

        },

        red: {
            backgroundColor: 'red'
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

    render () {
        return(
            <Segment vertical>
                <Container textAlign='center'>
                    <Grid style={{marginTop: "1em"}}>    
                        <Divider section />
                        <Grid.Row centered >
                            <Header as='h1' content='About Us' />
                        </Grid.Row>

                        <Image centered='true' size='massive' src='/images/frontView2.png' />

                        {/* FOOTER */}
                        <Grid.Row centered>
                            <Header as="h5" style={{marginTop:'14.4em'}}>
                                King's Diner <Icon className={css(this.styles.iconmini)} name='copyright outline' size="mini" fitted/> 2019
                            </Header>
                        </Grid.Row>
                    </Grid>
                    
                </Container>
            </Segment>
        );
    }
  }
  
  export default About;