const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    password: String
    createdAt: String
  }

  type Token {
    token: String
  }

  input userInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input loginInput {
    email: String!
    password: String!
  }

  type Query {
    # User
    getUser: User
  }

  type Mutation {
    register(input: userInput): User
    login(input: loginInput): Token
  }
`

module.exports = typeDefs;
