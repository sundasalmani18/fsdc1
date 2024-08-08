import express from 'express';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';



const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mesg: "welcome to my application" })

})

app.use("/auth", authRoutes);




const PORT = 8000;
app.listen(PORT, () => { console.log("server is running ", PORT) }
)