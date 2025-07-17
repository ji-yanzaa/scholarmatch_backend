'use strict'; 
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => { 
  class Scholarship extends Model { 
    static associate(models) { 
      
    } 
  }

Scholarship.init({ 
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  provider: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  deadline: { 
    type: DataTypes.DATE, 
    allowNull: false 
  }, 
  description: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  }, 
  requirements: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  }, 
  documents: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  }, 
  benefit: { 
    type: DataTypes.TEXT,
    allowNull: true 
  }, 
  status: { 
    type: DataTypes.STRING, 
    allowNull: true, 
    defaultValue: 'Available'
  } 
}, { 
  sequelize, modelName: 'Scholarship',
});

return Scholarship; };