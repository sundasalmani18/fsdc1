// DataFetcher.js
import React, { useEffect } from 'react';
import portfoloioData from '../data/portfoliodata.json';
import axios from 'axios';

const DataFetcher = ({ setData, isLocalData }) => {
    const localData = portfoloioData;


    const fetchFromMongoDB = async () => {
        try {

            const response = await axios.get('https://sundusbk.vercel.app/portfolio');
               console.log(response.data[0],"response")
               setData(response.data[0]);

            // const response = await fetch('http://localhost:8080/portfolio'); // Replace with your API endpoint
            // if (!response.ok) throw new Error('Network response was not ok');
            // const mongoData = await response.json();
            // setData(mongoData);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData(localData); // Fallback to local data
        }
    };

    useEffect(() => {
        if (isLocalData) {
            setData(localData);
        } else {
            fetchFromMongoDB();
        }
    }, [isLocalData, setData, localData]);

    return null; // This component doesn't need to render anything
};

export default DataFetcher;
