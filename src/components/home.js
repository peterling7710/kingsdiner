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
    List,
    Card,
    Rail,
    Image
     } from 'semantic-ui-react';


class Home extends React.Component{

    render () {
        return(
            <div id="home">
                <Segment vertical>
                    <Grid verticalAlign='middle'className={"hours"}>
                        <Grid.Row className="image-stack">
                        <Card className={"hoursList"}>
                                <Card.Content>
                                    <List>
                                        <List.Content>
                                            <List.Item ><img width="100px" src='/images/kingsdinerlogo.png' alt="kings diner logo."/></List.Item>
                                            <List.Item style={{fontSize:"20px", marginTop: "15px"}}>906 Kingston Road</List.Item>
                                            <br/>
                                        </List.Content>

                                        <List.Content>
                                            <List.Item> 
                                            <List.Header>Monday</List.Header>
                                            <List.Description>Closed</List.Description>
                                            </List.Item>
                                        </List.Content>

                                        <List.Content>
                                            <List.Item> 
                                            <List.Header className={"bold"}>LUNCH</List.Header>
                                            <List.Description></List.Description>
                                            <List.Description>10:00 am - 8:30 pm</List.Description>
                                            </List.Item>
                                        </List.Content>


                                            <List.Item> </List.Item>

                                            <List.Item>Wed 10:00 am - 8:30 pm</List.Item>

                                            <List.Item>Thu 10:00 am - 8:30 pm</List.Item>

                                            <List.Item>Fri 10:00 am - 8:30 pm</List.Item>
                                            <br/>
                                            <List.Item>Sat 8:00 am - 8:30 pm</List.Item>

                                            <List.Item>Sun 8:00 am - 4:00 pm</List.Item>
                                    </List>
                                </Card.Content>
                            </Card>
                            <Image style={{marginLeft:"0px"}} rounded src='/images/food1alt.jpg'/>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer/>
                
            </div>
        );
    }
  }
  
  export default Home;