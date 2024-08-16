import express from 'express';

const app = express();

app.use(express.json()); //Nos ayuda a tranformar las solicitudes a Json
app.listen(3000)

export default app;

