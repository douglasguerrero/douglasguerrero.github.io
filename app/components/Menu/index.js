/**
*
* Menu
*
*/

import React, { Component } from 'react';
import { Menu, Header, Icon, Segment } from 'semantic-ui-react';

export default class PrimaryMenu extends Component {
  state = { activeItem: 'inicio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    console.log(this.state);
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary vertical size="large" >

        <Segment inverted color="blue">
          <Menu.Item>
            <Header inverted as="h3">
              <Icon name="shopping bag" />
              <Header.Content >Pocket Deals Dashboard</Header.Content>
            </Header>
          </Menu.Item>

        </Segment>
        <Menu.Item name="inicio" active={activeItem === 'inicio'} onClick={this.handleItemClick} href="/home">
          <Icon name="home" /> Inicio
        </Menu.Item>
        <Menu.Item name="promociones" active={activeItem === 'promociones'} onClick={this.handleItemClick} href="/promos">
          <Icon name="tags" /> Promociones
        </Menu.Item>
        <Menu.Item name="tiendas" active={activeItem === 'tiendas'} onClick={this.handleItemClick} href="/business">
          <Icon name="shop" /> Tiendas
        </Menu.Item>
        <Menu.Item name="usuarios" active={activeItem === 'usuarios'} onClick={this.handleItemClick} >
          <Icon name="users" /> Usuarios
        </Menu.Item>
        <Menu.Item name="configuracion" active={activeItem === 'configuracion'} onClick={this.handleItemClick} >
          <Icon name="settings" /> Configuración
        </Menu.Item>
      </Menu>
    );
  }
}

