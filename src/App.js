import React from 'react'
import BaseLayout  from './layout/BaseLayout'

import BlankLayout from './layout/BlankLayout'
import LandingPage from './pages/LandingPage'

import SignUpPage  from './pages/SignUpPage'
import SignInPage  from './pages/SignInPage'
import AccountPage from './pages/AccountPage'
import AdminPage   from './pages/AdminPage'
import { Router } from 'react-router-dom'

import history from './constants/history'
import * as routes from './constants/routes'

import withSession from './components/Session/withSession'

const App = ({session, refetch})=> (
  <Router history={history}>

    <BaseLayout  exact path={routes.LANDING} session={session} component={() => <LandingPage />}                  />
    <BlankLayout exact path={routes.SIGN_UP}                   component={() => <SignUpPage refetch={refetch} />} />
    <BlankLayout exact path={routes.SIGN_IN}                   component={() => <SignInPage refetch={refetch} />} />
    <BaseLayout  exact path={routes.ACCOUNT} session={session} component={() => <AccountPage />}                  />
    <BaseLayout  exact path={routes.ADMIN}   session={session} component={() => <AdminPage />}                    />

  </Router>
)

export default withSession(App)
