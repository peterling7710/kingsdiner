import React from 'react';
import { StyleSheet, css } from 'aphrodite';
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
        url: '/images/menu1.png' 
                }

    displayDinner = (prevState) => {

        this.setState((prevState) => ({visible: !this.state.visible}))
        this.setState((prevState) => ({visible: !this.state.visible, url: '/images/menu1.png'}))
    }
    
    displayDinner = (prevState) => {

        this.setState((prevState) => ({visible: !this.state.visible}))
        this.setState((prevState) => ({visible: !this.state.visible, url: '/images/menu2.jpg'}))
    }
        
        
    render () {
        const visible = this.state.visible
        const url = this.state.url

        return(
            <Segment vertical>
                    <Grid style={{ marginTop: '1em' }} centered>    
                        <Divider section/>
                        <Grid.Row centered>
                            <Header as='h1' content='Menu' />
                        </Grid.Row>

                        <Grid.Row centered>
                            <Button.Group size='small'>
                                <Button
                                    onClick={this.displayBrunch}>
                                    Brunch
                                </Button>
                                <Button.Or />
                                <Button
                                    onClick={this.displayDinner}>
                                    Dinner
                                </Button>
                            </Button.Group>
                        </Grid.Row>

                    </Grid>

                    <Grid style={{ marginTop: '2em' }} centered>
                        <Divider hidden />
                        <Transition visible={visible} animation='scale' duration={500}>
                            <Image size='large' src={this.state.url} />
                        </Transition>
                    </Grid>

                    <Grid>    
                        <Divider section />
                        <Grid.Row centered>
                            <Header as="h5">
                                King's Diner <Icon className={css(this.styles.iconmini)} name='copyright outline' size="mini" fitted/> 2019
                            </Header>
                        </Grid.Row>
                    </Grid>
            </Segment>
        );
    }
  }
  
  export default Menu;