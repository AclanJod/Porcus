module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define( "user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        pass_word: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });
    return Users
};
