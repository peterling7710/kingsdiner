import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import {
  Menu,
  Container,
  Image,
  Button,
} from 'semantic-ui-react'

export const FixedNav = ({mobile}) => {

  return(
    <div>

          <Menu fixed='top' stackable>
            <Container>

            <Menu.Item className={"logo"} as={Link} to='/#home' header>King's Diner</Menu.Item>

            {["about", "menu", "contact"].map(sec => (
              <Menu.Item as={Link} to={`/#${sec}`}>{sec}</Menu.Item>
            ))}

            </Container>
          </Menu>
          
        </div>

    )
}