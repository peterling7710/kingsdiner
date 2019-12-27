import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Header,
        Icon} from 'semantic-ui-react';
        
class Footer extends React.Component{
    styles = StyleSheet.create({
        iconmini: {
            fontSize: '0.8em',
        }})
        
    render () {
        return (
            <Header as="h5" style={{marginTop:'14.4em'}}>
                King's Diner <Icon className={css(this.styles.iconmini)} name='copyright outline' size="mini" fitted/> 2019
            </Header>
        );
    }

}

export default Footer;
