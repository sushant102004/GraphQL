/*
    Provide functions to return data for all the queries written in typeDefs
*/

const { UserList, MoviesList } = require('./../FakeData')
    
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

        movies() {
            return MoviesList
        },

        movie(parent, args, context, info) {
            const { id } = args
            return MoviesList.find(movie => movie.id == id)
        }
    }
}


module.exports = { resolvers }