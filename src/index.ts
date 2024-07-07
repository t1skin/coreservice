import excelSheetsRoutes from './routes/excel.sheets.routes';
import excelAuthRoutes from './routes/excel.auth.routes';
import analyticsRoutes from './routes/analytics.routes';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/excel', excelAuthRoutes);
app.use('/excel', excelSheetsRoutes);
app.use('/analytics', analyticsRoutes);


app.listen(PORT, () => {
    console.log(`Core service is running on port: ${PORT}`);
});