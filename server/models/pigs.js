module.exports = (sequelize, DataTypes) => {
    const Pigs = sequelize.define ( "pig", {
       id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
       }, 

    });
    return Pigs
};