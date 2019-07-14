import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './layout.less'
import { Link, Route } from 'react-router-dom'

import Logotype from '../components/Logotype'
import Navigation from '../components/Navigation'
import * as routes from '../constants/routes'

const { Header, Sider, Content } = Layout

class BaseLayout extends React.Component {
    state = {
    sideBarCollapsed: false,
  }

  toggle = () => {
    this.setState({
      sideBarCollapsed: !this.state.sideBarCollapsed,
    })
  }

  render() {
    const {component: Component, session, ...rest} = this.props
    return (
      <Route {...rest} render={matchProps => (
        <Layout style={{minHeight:"100vh"}}>
          <Sider trigger={null} collapsible collapsed={this.state.sideBarCollapsed}>
            <Logotype collapsed={this.state.sideBarCollapsed} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0, display: 'flex' }}>
              <Icon
                className="trigger"
                type={this.state.sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="museum">
                  <Link to={routes.LANDING}>Museum</Link>
                </Menu.Item>
                <Menu.Item key="restaurant">
                  <Link to={routes.LANDING}>Restaurant</Link>
                </Menu.Item>
                <Menu.Item key="games">
                  <Link to={routes.LANDING}>Games</Link>
                </Menu.Item>
                <Menu.Item key="planet">
                  <Link to={routes.LANDING}>Planet</Link>
                </Menu.Item>
              </Menu>
              <div className='rightContainer'>
                <Navigation session={session} />
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              <Component {...matchProps} />
            </Content>
          </Layout>
        </Layout>
      )}/>
    )
  }
}

export default BaseLayout
