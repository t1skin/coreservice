import express from 'express';
import coreRoutes from './routes/core.routes';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/excel', coreRoutes);

app.listen(PORT, () => {
    console.log(`Core service is running on port: ${PORT}`);
});