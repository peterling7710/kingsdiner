import React, {useState, useEffect} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import {
  Menu,
  Container,
  Image,
  Button,
} from 'semantic-ui-react'

export const FixedNav = ({mobile}) => {

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
    <div className={"navbar"}>
      <Menu className={atTop[0] ? "is-paused" : ""} inverted={atTop[0]} stackable>
        <Container>

          <Menu.Item className={"logo"} as={Link} to='/' header>
            <img src='/images/kingsdinerlogo.png' alt="kings diner logo."/>
          </Menu.Item>

          {["about", "menu", "contact"].map(sec => (
            <Menu.Item key={sec} as={Link} to={`/${sec}`}>{sec}</Menu.Item>
          ))}

        </Container>

      </Menu>
    </div>

    )
}