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
            <div id="about">
                <section className="about">
                    <Segment id={"about"} vertical>
                        <Grid className="">    
                            <Divider section />
                            <Grid.Row centered >
                                <Header as='h1' content='About Us' />
                            </Grid.Row>
                        </Grid>
                    </Segment>

                    <Divider section />

                </section>
            </div>
        );
    }
  }
  
  export default About;