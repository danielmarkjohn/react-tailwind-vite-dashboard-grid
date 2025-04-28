// API Integration
import axios from 'axios'

// Base URL for the API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// Sample GET API call
export const fetchSampleData = async () => {
  try {
    const response = await apiClient.get('/posts')
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

// Example usage of the API call
// fetchSampleData().then((data) => console.log(data));
