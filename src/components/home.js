import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Footer from '../components/footer.js';

import {
    Segment,
    Container,
    Grid,
    Divider,
    Icon,
    Header
     } from 'semantic-ui-react';

class Home extends React.Component{

    render () {
        return(
            <div id="home">
                <Segment id={"home"} vertical>
                    <Container textAlign='center'>
                        <Grid>    
                            <Divider section />

                            <Grid.Row centered>
                            </Grid.Row>

                        </Grid>
                        
                    </Container>
                </Segment>
            </div>
        );
    }
  }
  
  export default Home;