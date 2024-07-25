import express from 'express';
import authRoutes from './routes/authRoutes.js'



const app = express();
const port = 8000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use("/auth",authRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});