import model from '../models/CarritoCompras.js';
import Cliente from '../models/Clientes.js';
import Producto from '../models/Productos.js';
import Repositorio from '../repositories/repositorio.js';

const repository = new Repositorio(model);

const findAll = async (req, res) => {
    try {
        const CarritoCompras = await repository.findAll({
            include: [
                { model: Cliente, as: 'cliente' },
                { model: Producto, as: 'producto' }
            ]
        });
        return sendResult(CarritoCompras, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching shopping carts' });
    }
}

const create = async (req, res) => {
    try {
        const CarritoCompra = req.body;
        console.log(CarritoCompra);
        const CarritoCompraCreated = await repository.create(CarritoCompra);
        return sendResult(CarritoCompraCreated, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating shopping cart' });
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.findOne({
            where: { id },
            include: [
                { model: Cliente, as: 'cliente' },
                { model: Producto, as: 'producto' }
            ]
        });
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching shopping cart' });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting shopping cart' });
    }
}

const update = async (req, res) => {
    try {
        const CarritoCompra = req.body;
        const result = await repository.update(CarritoCompra);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating shopping cart' });
    }
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(404).json({ message: 'Carrito no encontrado.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
