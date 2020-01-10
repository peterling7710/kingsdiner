import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Footer} from '../components/footer.js';

import {
    Segment,
    Container,
    Grid,
    Divider,
    Icon,
    Header,
    Button,
    Transition,
    Image
     } from 'semantic-ui-react';


class Menu extends React.Component{

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

    state = { 
        visible: true,
        url: '/images/menu1.png',
        numPages: null,
        pageNumber: 1,
    }

    displayBrunch = (prevState) => {

        this.setState((prevState) => ({visible: !this.state.visible, url: '/images/menu1.png', pageNumber: 1}))
    }
    
    displayDinner = (prevState) => {

        this.setState((prevState) => ({visible: !this.state.visible, url: '/images/menu2.jpg', pageNumber: 2}))
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
        
        
    render () {
        const { visible, url, numPages, pageNumber } = this.state;

        return(
            <div id="menu">
                <Segment id={"menu"} vertical>
                    <Grid style={{ marginBottom: '0em' }} centered>    

                        <Grid.Row centered>
                            <Button.Group size='small'>
                                <Button 
                                    onClick={this.displayBrunch}>
                                    Page 1
                                </Button>
                                <Button.Or />
                                <Button positive
                                    onClick={this.displayDinner}>
                                    Page 2
                                </Button>
                            </Button.Group>
                        </Grid.Row>    
                        

                    <Grid.Row centered>
                    
                    
                    </Grid.Row>
                    </Grid>

                </Segment>
                <Footer/>

            </div>
        );
    }
  }
  
  export default Menu;