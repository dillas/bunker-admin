import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { getMainDefinition } from 'apollo-utilities'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { onError } from 'apollo-link-error'
import { Router } from 'react-router-dom'

import history from './constants/history';

import './index.css'
import App from './App'
import { signOut } from './components/SignOut'
import * as serviceWorker from './serviceWorker'

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8000/graphql`,
  options: {
    reconnect: true,
  },
})

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return (
      kind === 'OperationDefinition' && operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const token = localStorage.getItem('token')

    if (token) {
      headers = { ...headers, 'x-token': token }
    }

    return { headers }
  })

  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.log('GraphQL error', message)

      if (message === 'UNAUTHENTICATED') {
        signOut(client)
      }
    })
  }

  if (networkError) {
    console.log('Network error', networkError)

    if (networkError.statusCode === 401) {
      signOut(client)
    }
  }
})

const link = ApolloLink.from([authLink, errorLink, terminatingLink])

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
