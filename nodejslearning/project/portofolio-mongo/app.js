import express from 'express'
import  db from './model/index.js'
import mongoose from 'mongoose';
// import employeeRoutes from './routes/employeeRoutes.js'
// import bodyParser from 'body-parser';
// import cors from 'cors'
import PortfolioModel from './model/createPortofolio.model.js';
import { exampleData } from './model/portfolioData.js';
 

const app = express()
// app.use(bodyParser.json());
// app.use(cors())

db.mongose.connect(db.url).then(() => {
    console.log("connected to database")

    const mainData = new PortfolioModel(exampleData);
    return mainData.save();
   })
  .then(() => {
    console.log('Data saved successfully');
    mongoose.connection.close(); // Close the connection when done
  })
  .catch((err) => {
    console.error('Error:', err);
  });


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