import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Avatar } from 'antd'

import * as routes from '../../constants/routes'
import SignOutButton from '../SignOut'

const menu = (session) => (
  <Menu>

    <Menu.Item>
      <Link to={routes.ACCOUNT}>Account</Link>
    </Menu.Item>

    {session && session.me && session.me.role === 'ADMIN' && (
      <Menu.Item>
        <Link to={routes.ADMIN}>Admin</Link>
      </Menu.Item>
    )}

    <Menu.Divider />

    <Menu.Item>
      <SignOutButton />
    </Menu.Item>

  </Menu>
);

const Navigation = ({ session }) => (
  <div>
    {session && session.me ? (
      <NavigationAuth session={session} />
    ) : (
      <NavigationNonAuth />
    )}
  </div>
)

const NavigationAuth = ({ session }) => <>
  <Dropdown overlay={menu(session)}>
    <Avatar size="large" style={{ marginRight: 8 }} >{session.me.username.toUpperCase()}</Avatar>
  </Dropdown>
</>

const NavigationNonAuth = () => <>
  <Link to={routes.SIGN_IN}>Sign In</Link>
  <Link to={routes.LANDING}>Landing</Link>
</>

export default Navigation;