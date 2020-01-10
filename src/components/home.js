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
    Image, Responsive
     } from 'semantic-ui-react';


class Home extends React.Component{

    render () {
        return(
            <div id="home">
                <Responsive>
                <Segment vertical>
                    <Grid verticalAlign='middle'className={"hours"}>
                        <Grid.Row className="image-stack">
                        <Card className={"hoursList"}>
                                <Card.Content>
                                    <List>
                                        <List.Content>
                                            <List.Item ><img width="100px" src='/images/kingsdinerlogo.png' alt="kings diner logo."/></List.Item>
                                            <List.Item style={{fontSize:"20px", marginTop: "15px", marginBottom:"0.5em"}}>906 Kingston Road</List.Item>
                                            <br/>
                                        </List.Content>

                                        <List.Content>
                                            <List.Item> 
                                            <List.Header>MONDAY</List.Header>
                                            <List.Description>CLOSED</List.Description>
                                            </List.Item>
                                        </List.Content>
                                        
                                        <br/>
                                        <br/>

                                        <List.Content>
                                            <List.Item> 
                                            <List.Header style={{fontWeight:"bold", marginBottom:"0.5em"}}>BREAKFAST</List.Header>
                                            <List.Description>TUESDAY TO FRIDAY</List.Description>
                                            <List.Description>10:00 AM - 2:00 PM</List.Description>
                                            <br/>
                                            <List.Description>SATURDAY AND SUNDAY</List.Description>
                                            <List.Description>8:00 AM - 2:00 PM</List.Description>
                                            </List.Item>
                                        </List.Content>

                                        <br/>
                                        <br/>

                                        <List.Content>
                                            <List.Item> 
                                            <List.Header style={{fontWeight:"bold", marginBottom:"0.5em"}}>DINNER</List.Header>
                                            <List.Description>TUESDAY TO SATURDAY</List.Description>
                                            <List.Description>2:00 PM - 8:30 PM</List.Description>
                                            <br/>
                                            <List.Description>SUNDAY</List.Description>
                                            <List.Description>2:00 PM - 4:00 PM</List.Description>
                                            </List.Item>
                                        </List.Content>
                                    </List>
                                </Card.Content>
                            </Card>
                            <Image style={{marginLeft:"0px"}} rounded src='/images/food1alt.jpg'/>
                        </Grid.Row>
                    </Grid>
                </Segment>
                </Responsive>

                <Footer/>
                
            </div>
        );
    }
  }
  
  export default Home;