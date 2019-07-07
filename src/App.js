import React from 'react'
import withSession from './components/Session/withSession'

import BaseLayout from './layout/BaseLayout'
import BlankLayout from './layout/BlankLayout'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import AccountPage from './pages/AccountPage'
import AdminPage from './pages/AdminPage'

import * as routes from './constants/routes'

const App = ({session, refetch})=> (
  <>
    <BaseLayout exact path={routes.LANDING} component={() => <LandingPage />} session={session}/>
    <BlankLayout exact path={routes.SIGN_UP} component={() => <SignUpPage refetch={refetch} />}/>
    <BlankLayout exact path={routes.SIGN_IN} component={() => <SignInPage refetch={refetch} />}/>
    <BaseLayout exact path={routes.ACCOUNT} component={() => <AccountPage />} session={session}/>
    <BaseLayout exact path={routes.ADMIN} component={() => <AdminPage />} session={session}/>
  </>
)

export default withSession(App)
