import express from 'express'
import  db from './model/index.js'
import mongoose from 'mongoose';
// import employeeRoutes from './routes/employeeRoutes.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import portfolioRoutes from  "./routes/portfolioRoutes.js"
import supportRoutes from  "./routes/supportRoutes.js"
import dotenv from 'dotenv'


 
const app = express()
app.use(bodyParser.json());

app.use(cors())

dotenv.config();
db.mongose.connect(db.url).then(() => {
    console.log("connected to database")

  //   const mainData = new PortfolioModel(exampleData);
  //   return mainData.save();
  //  })
  // .then(() => {
  //   console.log('Data saved successfully');
  //   mongoose.connection.close(); // Close the connection when done
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
app.use("/portfolio", portfolioRoutes);
app.use("/supportsystem", supportRoutes);




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`"server running on port ${PORT}`)
})