import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './App.css'

import UsersList from './components/UsersList'
import Logotype from './components/Logotype'

const { Header, Sider, Content } = Layout

class App extends React.Component {
  state = {
    sideBarCollapsed: false,
  }

  toggle = () => {
    this.setState({
      sideBarCollapsed: !this.state.sideBarCollapsed,
    })
  }

  render() {
    return (
      <Layout style={{height:"100vh"}}>
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
            <UsersList />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
