/*
    PoF - Write type definations that can be used by ApolloServer in index.js
*/

const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id : ID!
        name : String!
        username : String!
        age : Int!
        isMarried : Boolean!
        nationality : Nationality
        fvtMovie : Movie
    }

    type Movie {
        id : ID!
        name : String!
        yearOfPublication: Int!
    }

    type Query {
        users : [User!]!
        user(username : String) : User 
        movies : [Movie]
        movie(id : ID!) : Movie
    }

    input CreateUserInput {
        name : String!
        username : String!
        age : Int!
        nationality : Nationality = Indian
    }

    type Mutation {
        createUser(input : CreateUserInput) : User
    }

    enum Nationality {
        Indian,
        Canadian,
        Russian
    }
`

module.exports = { typeDefs }