import PortfolioModel from '../model/createPortofolio.model.js';
import { exampleData } from '../model/portfolioData.js';
import mongoose from 'mongoose';




export const getPortofolioData=async (req, res) => {
    try {
      const allData = await PortfolioModel.find(); // Fetch all documents from the collection
      res.status(200).json(allData); // Respond with the retrieved data
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data', details: err.message }); // Respond with error
    }
  };



export const addPortofolioData= async(req, res) => {
const mainData = new PortfolioModel(exampleData);
try {
  await mainData.save();
  console.log('Data saved successfully');
//   alert("data saved")
} catch (err) {
  console.error('Error saving data:', err);
} finally {
  mongoose.connection.close(); // Close the connection when done
}
}


