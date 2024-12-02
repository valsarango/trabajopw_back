import {DataTypes} from 'sequelize';
import sequelize from '../config/database.js';
import Cliente from './Clientes.js';
import Producto from './Productos.js';

const CarritoCompras = sequelize.define('CarritoCompras', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idCliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Cliente,
      key: 'id'
    }
  },
  idProducto: {
    type: DataTypes.INTEGER,
    references: {
      model: Producto,
      key: 'id'
    }
  },
  esParaDespues: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'carrito_compras',
  timestamps: false
});

Cliente.hasMany(CarritoCompras, { foreignKey: 'idCliente', as: 'carritos' });
CarritoCompras.belongsTo(Cliente, { foreignKey: 'idCliente', as: 'cliente' });

Producto.hasMany(CarritoCompras, { foreignKey: 'idProducto', as: 'carritos' });
CarritoCompras.belongsTo(Producto, { foreignKey: 'idProducto', as: 'producto' });

export default CarritoCompras;
