import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './assets/logo-web-admin.svg';
import logoMin from './assets/logo-web-admin-min.svg';
import './App.css';

const { Header, Sider, Content } = Layout;

const GET_USERS = gql`
  query GetUsers {
    users {
        id
        username
        email
        role
    }
  }
`;

const UsersList = () => (
  <Query
    query={GET_USERS}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( ${error.message}</p>;

      return data.users.map(({ id, username, email, role }) => (
        <div key={id}>
          <p><b>{username.toUpperCase()}</b>: {email} {role}</p>
        </div>
      ));
    }}
  </Query>
);

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {

    const logotype = !this.state.collapsed ? logo : logoMin;

    return (
      <Layout style={{height:"100vh"}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <img src={logotype} className="logo" alt="Логотип Бункер-42"/>
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
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
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
    );
  }
}

export default App;
