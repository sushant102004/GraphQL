/*
    PoF - Write type definations that can be used by ApolloServer in index.js
*/

const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id : ID!
        name : String!
        username : String!
        age: Int!
        isMarried : Boolean!
    }

    type Query {
        users : [User!]!
    }
`

module.exports = { typeDefs }