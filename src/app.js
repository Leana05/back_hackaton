import express from 'express';
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import categoryRoutes from './routes/category.route.js'
//import gastoRoutes from './routes/gasto.route.js'
import ingresoRoutes from './routes/ingreso.route.js'

const app = express();

app.use(
    cors({
        origin: 'http://localhost:8081',
        methods: 'GET, POST, PUT, DELETE, OPTION, PATCH',
        allowedHeaders: 'Content-Type, Authorization',
        optionsSuccessStatus: 204,
    })
);
app.use(express.json()); //Nos ayuda a tranformar las solicitudes a Json

app.use('/singup', userRoutes);
app.use('/filtrer', categoryRoutes)
//app.use('/Gasto', gastoRoutes);
app.use('/finanzas', ingresoRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found',
    });
});

export default app;

