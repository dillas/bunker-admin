import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './layout.less'
import { Route } from 'react-router-dom'

import Logotype from '../components/Logotype'
import Navigation from '../components/Navigation'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['sub1']}>
              <Menu.Item key="sub1" >
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="sub2" >
                <Icon type="read" />
                <span>Новости</span>
              </Menu.Item>
              <SubMenu key="2" title={
                <>
                  <Icon type="bank" />
                  <span>Музей</span>
                </>
              }>
                <Menu.Item key="2-7">Option 7</Menu.Item>
                <Menu.Item key="2-8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="3" title={
                <>
                  <Icon type="coffee" />
                  <span>Ресторан</span>
                </>
              }>
                <Menu.Item key="3-7">Option 7</Menu.Item>
                <Menu.Item key="3-8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="4" title={
                <>
                  <Icon type="fire" />
                  <span>Игровой</span>
                </>
              }>
                <Menu.Item key="4-7">Option 7</Menu.Item>
                <Menu.Item key="4-8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="5" title={
                <>
                  <Icon type="rocket" />
                  <span>Детский</span>
                </>
              }>
                <Menu.Item key="5-7">Option 7</Menu.Item>
                <Menu.Item key="5-8">Option 8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
              <Icon
                className="trigger"
                type={this.state.sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              {/*<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
              </Menu>*/}
              <div className='rightContainer' style={{  }}>
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
