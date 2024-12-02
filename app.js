import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import CarritoComprasRouter from './src/routes/CarritoComprasRoutes.js';
import ClientesRouter from './src/routes/Clientes.js';
import ClientesDireccionesRouter from './src/routes/ClientesDirecciones.js';
import SignUpRouter from './src/routes/SignUp.js'
import DetalleOrdenesRouter from './src/routes/DetalleOrdenes.js';
import LogInRouter from './src/routes/LogIn.js'
import OrdenesRouter from './src/routes/Ordenes.js';
import ProductosRouter from './src/routes/Productos.js';
import RolesRouter from './src/routes/Roles.js';
import UsuariosRouter from './src/routes/Usuarios.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ message: "Hello World", code: "201"});
});

app.use('/CarritoCompras', CarritoComprasRouter);
app.use('/Clientes', ClientesRouter);
app.use('/ClientesDirecciones', ClientesDireccionesRouter);
app.use('/CrearCuenta', SignUpRouter);
app.use('/DetalleOrdenes', DetalleOrdenesRouter);
app.use('/InicioSesion', LogInRouter);
app.use('/Ordenes', OrdenesRouter);
app.use('/Productos', ProductosRouter);
app.use('/Roles', RolesRouter);
app.use('/Usuarios', UsuariosRouter);

export default app;