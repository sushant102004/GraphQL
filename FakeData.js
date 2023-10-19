const MoviesList = [
    {
        id : 0,
        name : 'Interstellar',
        yearOfPublication : 2016
    },
    {
        id : 1,
        name : 'Avengers End Game',
        yearOfPublication : 2019
    },
    {
        id : 2,
        name : 'Age Of Ultron',
        yearOfPublication : 2014
    },
]


const UserList = [
    {
        id : 0,
        name : 'Sushant',
        username : 'sushant102004',
        age: 19,
        isMarried : false,
        nationality: 'Indian',
        fvtMovie : MoviesList[0]
    },
    {
        id : 1,
        name : 'John',
        username : 'john65',
        age: 23,
        isMarried : true,
        nationality: 'Russian',
        fvtMovie : MoviesList[1]
    },
    {
        id : 2,
        name : 'Kevin Ownes',
        username : 'owens_k',
        age: 16,
        isMarried : false,
        nationality: 'Canadian',
        fvtMovie : MoviesList[0]
    },
    {
        id : 3,
        name : 'Steve',
        username : 'its_steve',
        age: 20,
        isMarried : false,
        nationality: 'Russian',
        fvtMovie : MoviesList[2]
    },
    {
        id : 4,
        name : 'Chintu',
        username : 'chintu_bhai',
        age: 19,
        isMarried : false,
        nationality: 'Russian'
    }
]

module.exports = { UserList, MoviesList }