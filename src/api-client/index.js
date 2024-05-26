import axios from "axios";
class ApiClient {
  constructor() {
    this.baseURL = "http://localhost:8989"
  }

  async get(endpoint, params = {}) {
    const url = new URL(endpoint, this.baseURL);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    return response.json();
  }

  async post(endpoint, data = {}) {
    const url = new URL(endpoint, this.baseURL);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to post data to ${url}`);
    }

    return response.json();
  }

  async put(endpoint, data = {}) {
    const url = new URL(endpoint, this.baseURL);
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to put data to ${url}`);
    }

    return response.json();
  }

  async destroy(endpoint) {
    const url = new URL(endpoint, this.baseURL);
    
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete data at ${url}`);
    }

    return response.json();
  }
}
export default ApiClient;

// // Example usage:
// const api = new ApiClient('https://example.com/api');

// // GET request
// api.get('/users').then(data => console.log(data)).catch(error => console.error(error));

// // POST request
// api.post('/users', { name: 'John Doe' }).then(data => console.log(data)).catch(error => console.error(error));

// // PUT request
// api.put('/users/123', { name: 'Updated Name' }).then(data => console.log(data)).catch(error => console.error(error));

// // DELETE request
// api.destroy('/users/123').then(data => console.log(data)).catch(error => console.error(error));
