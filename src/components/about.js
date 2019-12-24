import React from 'react';
import {
    Segment,
    Container,
    Grid,
    Divider,
    Icon,
    Header
     } from 'semantic-ui-react';

class About extends React.Component{

    render () {
        return(
            <Segment vertical>
                <Container textAlign='center'>
                    <Grid>    
                        <Divider section />
                        <Grid.Row centered>
                            <Icon name='map marker' size='large' />
                            <Header as='h4' content='aToronto, ON, Canada' />
                        </Grid.Row>
                    </Grid>
                    
                </Container>
            </Segment>
        );
    }
  }
  
  export default About;