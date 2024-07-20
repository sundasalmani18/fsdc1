import express from 'express';
import authRoutes from './routes/authRoutes';



const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/auth",authRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});