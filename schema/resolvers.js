/*
    Provide functions to return data for all the queries written in typeDefs
*/

const { UserList } = require('./../FakeData')

const resolvers = {
    Query: {
        users() {
            return UserList
        },

        user: (parent, args, context, info) => {
            const { username } = args
            const foundUser = UserList.find(user => user.username === username)
            return foundUser
          },
    }
}


module.exports = { resolvers }