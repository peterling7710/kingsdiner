import React from 'react';
import {Link} from 'react-router-dom';
import {
  Menu,
  Container,
  Image,
  Button,
} from 'semantic-ui-react'

export const FixedNav = ({mobile}) => (
        <div>

          <Menu fixed='top' stackable>
            <Container>
              <Menu.Item as={Link} to='/' style={{fontSize:"25px"}} header>King's Diner</Menu.Item>
              <Menu.Item as={Link} to='/menu'>Menu</Menu.Item>
              <Menu.Item as={Link} to='/about'>About</Menu.Item>
              <Menu.Item as={Link} to='/contact'>Contact</Menu.Item>
            </Container>
          </Menu>
          
        </div>
)