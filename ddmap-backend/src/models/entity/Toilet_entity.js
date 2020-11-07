

module.exports = (sequelize, DataTypes) => (
 
    sequelize.define('toilets',{
        id: {
            type: DataTypes.INTEGER,
            allowNUll: false, 
            unique: true, 
            primaryKey: true, 
            autoIncrement: true 
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: true, 
            unique: false 
        },
        latitude: {
            type: DataTypes.DOUBLE, 
            allowNull: false,
        },
        longitude: {
            type: DataTypes.DOUBLE, 
            allowNull: false 
        },
        image: {
            type: DataTypes.STRING(200), 
            allowNull: true, 
        },
        goo_name : {
            type: DataTypes.STRING(40), 
            allowNull: false
        },
        dong_name: {
            type: DataTypes.STRING(40), 
            allowNull: false 
        },
        street_num_main : {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        street_num_sub: {
            type: DataTypes.INTEGER, 
            allowNull: false 
        }, 
        detail : {
            type: DataTypes.STRING(200), 
            allowNull: true
        }
    },{
        charset:'utf8',
        collate:'utf8_general_ci'
    })

);