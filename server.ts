import 'dotenv/config';
import express from 'express';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";
import router from './routes/api';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', router);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


export default app;


