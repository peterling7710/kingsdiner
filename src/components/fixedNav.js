import React, {useState} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import {
  Menu,
  Container
} from 'semantic-ui-react'

export const FixedNav = ({mobile}) => {

const [atTop, setTop] = useState([false])

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