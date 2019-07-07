import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import { Table } from 'antd'

const GET_USERS = gql`
    query GetUsers {
        users {
            id
            username
            email
            role
            createdAt
            updatedAt
        }
    }
`

const UsersList = () => (
  <Query
    query={GET_USERS}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :( ${error.message}</p>
      const columns = [
        { title: 'User ID', dataIndex: 'id',  key: 'userId' },
        { title: 'Name', dataIndex: 'username',  key: 'username' },
        { title: 'Email', dataIndex: 'email',  key: 'email' },
        { title: 'Role', dataIndex: 'role',  key: 'role' },
        { title: 'Created At', dataIndex: 'createdAt',  key: 'createdAt' },
        { title: 'Updated At', dataIndex: 'updatedAt',  key: 'updatedAt' },
      ]

      return <Table columns={columns} dataSource={data.users} rowKey={user => user.id} size="small" />

    }}
  </Query>
)

export default UsersList