import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Form, Icon, Input, Button, Checkbox, Col, Row } from 'antd'
import Logotype from '../components/Logotype'
import './pageStyles.css'

import { SignUpLink } from './SignUpPage'
import * as routes from '../constants/routes'
import ErrorMessage from '../components/Error'

const SIGN_IN = gql`
    mutation($login: String!, $password: String!) {
        signIn(login: $login, password: $password) {
            token
        }
    }
`

const SignInPage = ({ history, refetch }) => (
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} refetch={refetch} />
    <SignUpLink />
  </div>
)

const INITIAL_STATE = {
  login: '',
  password: '',
}

class SignInForm extends Component {
  state = { ...INITIAL_STATE }

  onChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmit = (event, signIn) => {
    signIn().then(async ({ data }) => {
      this.setState({ ...INITIAL_STATE })

      localStorage.setItem('token', data.signIn.token)

      await this.props.refetch()

      this.props.history.push(routes.LANDING)
    })

    event.preventDefault()
  }

  render() {
    const { login, password } = this.state

    // const isInvalid = password === '' || login === ''

    return (
      <Mutation mutation={SIGN_IN} variables={{ login, password }}>
        {(signIn, { data, loading, error }) => (
          <Row className='pageLogin' style={{height:"100vh"}} type="flex" justify="space-around" align="middle">
            <Col xs={20} sm={12} md={8} lg={6} xl={5}>
              <Logotype theme='dark' />
              <Form onSubmit={event => this.onSubmit(event, signIn)} className="login-form">
                <Form.Item>
                  {/*{getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(*/}
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      name="login"
                      value={login}
                      onChange={this.onChange}
                      type="text"
                      placeholder="Email or Username"
                    />
                   {/*)}*/}
                </Form.Item>
                <Form.Item>
                  <Input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  {/*{getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(*/}
                    <Checkbox>Remember me</Checkbox>
                  {/*)}*/}
                  <a className="login-form-forgot" href="/">
                    Forgot password
                  </a>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="/">register now!</a>
                </Form.Item>

                {error && <ErrorMessage error={error} />}
              </Form>
            </Col>
          </Row>
        )}
      </Mutation>
    )
  }
}

export default withRouter(SignInPage)

export { SignInForm }



/*<Row className='pageLogin' style={{height:"100vh"}} type="flex" justify="space-around" align="middle">
  <Col span={5}>
    <Logotype theme='dark' />
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/">register now!</a>
        </Form.Item>
      </Form>
  </Col>
</Row>*/