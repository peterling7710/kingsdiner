import React, {useState, useEffect} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import { StyleSheet, css } from 'aphrodite';
import {
  Menu,
  Container,
  Image,
  Button,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'

export const Footer = ({mobile}) => {

const styles = StyleSheet.create({
    iconmini: {
        fontSize: '0.8em',
        lineHeight: '0.7'

    }
});

const [atTop, setTop] = useState([false])

const handleScroll= () =>{
  if (window.pageYOffset > 0) {
    setTop(false);
  }else{
    setTop(true);
  }
}

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  console.log("Created");
  return () => {
    console.log("Cleaned up");
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  return(
    <div className={"navbar footer"}>
        <Segment>

            <img width="60px" src='/images/kingsdinerlogo.png' alt="kings diner logo."/>
            <Header style={{fontSize:"10px", marginTop:"5px", marginBottom:""}}>906 Kingston Road, Toronto</Header>
            <Header as="h5" style={{marginTop:"0"}}>
                King's Diner <Icon className={css(styles.iconmini)} name='copyright outline' size="mini" fitted/> 2019
            </Header>
        </Segment>
    </div>

    )
}