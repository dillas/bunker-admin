import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './layout.css'
import { Route } from 'react-router-dom'

import Logotype from '../components/Logotype'
import Navigation from '../components/Navigation'

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
            <Navigation session={session} />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
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
