const express = require('express');
const fetch = require('node-fetch').default;
const cors = require('cors');

const api = express();
api.use(cors());

async function getNewSolution(length) {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word?length=' + length);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // rethrow the error for handling in the caller
    }
}


api.get('/NewSolution/:length', async (req, res) => {
   try {
      const { length } = req.params;
      const solution = await getNewSolution(length);
      res.status(200).json(solution);
      
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
});

api.listen(3000, () => {
   console.log("API running at localhost: 3000"); 
});


