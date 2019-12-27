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
            <Segment vertical>
                <Container textAlign='center'>
                    <Grid>    
                        <Divider section />

                        {/* FOOTER */}
                        <Grid.Row centered>
                            <Footer/>
                        </Grid.Row>

                    </Grid>
                    
                </Container>
            </Segment>
        );
    }
  }
  
  export default Home;