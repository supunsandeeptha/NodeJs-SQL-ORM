module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: type.STRING,
        name: type.STRING,
        given_name: type.STRING,
        family_name: type.STRING,
    });
};