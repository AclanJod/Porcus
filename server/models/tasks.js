const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Tasks = Sequelize.define( "task", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        task_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        task_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
    return Tasks
};