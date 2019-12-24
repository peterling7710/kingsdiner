import React from 'react';
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
                                    content='Brunch'
                                    onClick={this.displayBrunch}>
                                    Brunch
                                </Button>
                                <Button.Or />
                                <Button 
                                    content='Dinner'
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
                            <Icon name='map marker' size='large' />
                            <Header as='h4' content='Toronto, ON, Canada' />
                        </Grid.Row>
                    </Grid>
            </Segment>
        );
    }
  }
  
  export default Menu;