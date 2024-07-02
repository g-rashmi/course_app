const axios = require('axios');

// Function to send request to the backend
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:200/courses');
    console.log('Data fetched successfully', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Set interval to fetch data every minute (60000 ms)
setInterval(fetchData, 60000);

// Initial call to fetch data immediately when the script starts
fetchData();
