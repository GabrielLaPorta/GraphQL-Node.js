const User = require('./models/User');

module.exports = {
    Query: {
        users: () => User.findAll(),
        user: (_, { id }) => User.findByPk(id)
    },

    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email }),
        updateUser: (_, { id, name, email }) => { User.update(
            { 
                name, 
                email
            },
            {
                where: { id },
                returning: true
            });
        },
        deleteUser: (_, { id }) => { User.destroy(
            {
                where: { id },
                returning: true
            });
        }
    }
}