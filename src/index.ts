import express from 'express';
import excelAuthRoutes from './routes/excel.auth.routes';
import excelSheetsRoutes from './routes/excel.sheets.routes';
import analysisDataRoutes from './routes/analysis.data.routes';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/excel', excelAuthRoutes);
app.use('/excel', excelSheetsRoutes);
app.use('/analysis', analysisDataRoutes);


app.listen(PORT, () => {
    console.log(`Core service is running on port: ${PORT}`);
});