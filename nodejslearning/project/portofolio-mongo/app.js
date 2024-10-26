import express from 'express'
// import  db from './models/index.js'
// import employeeRoutes from './routes/employeeRoutes.js'
// import bodyParser from 'body-parser';
// import cors from 'cors'
 

const app = express()
// app.use(bodyParser.json());
// app.use(cors())

// db.mongose.connect(db.url).then(() => {
//     console.log("connected to database")
// }).catch(err => {
//     console.log("cannot connect to database",err)
//     process.exit()
// })

app.get('/', (req, res) => {
    res.json({ 'message': "mongo db app" })
})

// app.use("/employee", employeeRoutes);



const PORT = 8080;
app.listen(PORT, () => {
    console.log(`"server running on port ${PORT}`)
})