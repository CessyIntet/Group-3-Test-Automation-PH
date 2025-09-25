import { test, expect } from '@playwright/test';

test.describe('API Testing Suite', () => {

  // Test public APIs that might be used by the Pokemon table
  test.describe('Pokemon API Tests', () => {
    
    test('should fetch Pokemon data from public API', async ({ request }) => {
      // Test fetching Pokemon data (this might be what powers the table)
      const response = await request.get('https://pokeapi.co/api/v2/pokemon/1');
      
      expect(response.status()).toBe(200);
      
      const pokemon = await response.json();
      expect(pokemon).toHaveProperty('name');
      expect(pokemon).toHaveProperty('id');
      expect(pokemon).toHaveProperty('height');
      expect(pokemon).toHaveProperty('weight');
      expect(pokemon.name).toBe('bulbasaur');
      expect(pokemon.id).toBe(1);
    });

    test('should fetch Pokemon list with pagination', async ({ request }) => {
      const response = await request.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
      
      expect(response.status()).toBe(200);
      
      const data = await response.json();
      expect(data).toHaveProperty('results');
      expect(data).toHaveProperty('count');
      expect(data).toHaveProperty('next');
      expect(data.results).toHaveLength(20);
      
      // Check structure of first result
      expect(data.results[0]).toHaveProperty('name');
      expect(data.results[0]).toHaveProperty('url');
    });

    test('should handle invalid Pokemon ID gracefully', async ({ request }) => {
      const response = await request.get('https://pokeapi.co/api/v2/pokemon/99999');
      
      expect(response.status()).toBe(404);
    });

    test('should fetch Pokemon types', async ({ request }) => {
      const response = await request.get('https://pokeapi.co/api/v2/type/1');
      
      expect(response.status()).toBe(200);
      
      const typeData = await response.json();
      expect(typeData).toHaveProperty('name');
      expect(typeData).toHaveProperty('pokemon');
      expect(typeData.name).toBe('normal');
    });
  });

  // Test Todo API functionality (from the API Testing page)
  test.describe('Todo API Tests', () => {
    
    test('should create a new todo item', async ({ request }) => {
      const newTodo = {
        title: 'Test API automation',
        completed: false,
        userId: 1
      };

      const response = await request.post('https://jsonplaceholder.typicode.com/todos', {
        data: newTodo
      });

      expect(response.status()).toBe(201);
      
      const todo = await response.json();
      expect(todo).toHaveProperty('id');
      expect(todo.title).toBe(newTodo.title);
      expect(todo.completed).toBe(newTodo.completed);
      expect(todo.userId).toBe(newTodo.userId);
    });

    test('should fetch all todos', async ({ request }) => {
      const response = await request.get('https://jsonplaceholder.typicode.com/todos');
      
      expect(response.status()).toBe(200);
      
      const todos = await response.json();
      expect(Array.isArray(todos)).toBe(true);
      expect(todos.length).toBeGreaterThan(0);
      
      // Check structure of first todo
      expect(todos[0]).toHaveProperty('id');
      expect(todos[0]).toHaveProperty('title');
      expect(todos[0]).toHaveProperty('completed');
      expect(todos[0]).toHaveProperty('userId');
    });

    test('should update a todo item', async ({ request }) => {
      const updatedTodo = {
        id: 1,
        title: 'Updated todo via API test',
        completed: true,
        userId: 1
      };

      const response = await request.put('https://jsonplaceholder.typicode.com/todos/1', {
        data: updatedTodo
      });

      expect(response.status()).toBe(200);
      
      const todo = await response.json();
      expect(todo.id).toBe(1);
      expect(todo.title).toBe(updatedTodo.title);
      expect(todo.completed).toBe(true);
    });

    test('should delete a todo item', async ({ request }) => {
      const response = await request.delete('https://jsonplaceholder.typicode.com/todos/1');
      
      expect(response.status()).toBe(200);
    });

    test('should handle invalid todo ID', async ({ request }) => {
      const response = await request.get('https://jsonplaceholder.typicode.com/todos/999999');
      
      // JSONPlaceholder returns 404 for non-existent resources
      expect(response.status()).toBe(404);
    });
  });

  // Test API response times and performance
  test.describe('API Performance Tests', () => {
    
    test('should respond within acceptable time limits', async ({ request }) => {
      const startTime = Date.now();
      
      const response = await request.get('https://jsonplaceholder.typicode.com/posts');
      
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      expect(response.status()).toBe(200);
      expect(responseTime).toBeLessThan(5000); // Should respond within 5 seconds
      
      console.log(`API Response time: ${responseTime}ms`);
    });

    test('should handle concurrent requests', async ({ request }) => {
      const requests = [];
      
      // Make 5 concurrent API calls
      for (let i = 1; i <= 5; i++) {
        requests.push(request.get(`https://jsonplaceholder.typicode.com/posts/${i}`));
      }
      
      const responses = await Promise.all(requests);
      
      // All should succeed
      responses.forEach((response, index) => {
        expect(response.status()).toBe(200);
        console.log(`Request ${index + 1} completed`);
      });
    });
  });

  // Test API data validation
  test.describe('API Data Validation Tests', () => {
    
    test('should validate user data structure', async ({ request }) => {
      const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
      
      expect(response.status()).toBe(200);
      
      const user = await response.json();
      
      // Validate required fields
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('address');
      expect(user).toHaveProperty('phone');
      expect(user).toHaveProperty('website');
      expect(user).toHaveProperty('company');
      
      // Validate data types
      expect(typeof user.id).toBe('number');
      expect(typeof user.name).toBe('string');
      expect(typeof user.email).toBe('string');
      
      // Validate email format
      expect(user.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    test('should validate post data with comments', async ({ request }) => {
      const postResponse = await request.get('https://jsonplaceholder.typicode.com/posts/1');
      const commentsResponse = await request.get('https://jsonplaceholder.typicode.com/posts/1/comments');
      
      expect(postResponse.status()).toBe(200);
      expect(commentsResponse.status()).toBe(200);
      
      const post = await postResponse.json();
      const comments = await commentsResponse.json();
      
      // Validate post structure
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
      expect(post).toHaveProperty('userId');
      
      // Validate comments are array and have correct structure
      expect(Array.isArray(comments)).toBe(true);
      if (comments.length > 0) {
        expect(comments[0]).toHaveProperty('id');
        expect(comments[0]).toHaveProperty('postId');
        expect(comments[0]).toHaveProperty('name');
        expect(comments[0]).toHaveProperty('email');
        expect(comments[0]).toHaveProperty('body');
        expect(comments[0].postId).toBe(post.id);
      }
    });
  });

  // Test error handling and edge cases
  test.describe('API Error Handling Tests', () => {
    
    test('should handle malformed requests', async ({ request }) => {
      const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
          // Missing required fields
          invalidField: 'test'
        }
      });
      
      // JSONPlaceholder is lenient, but in real APIs this might fail
      // Adjust expectations based on actual API behavior
      expect([200, 201, 400, 422]).toContain(response.status());
    });

    test('should handle network timeouts gracefully', async ({ request }) => {
      try {
        const response = await request.get('https://httpstat.us/200?sleep=10000', {
          timeout: 5000 // 5 second timeout
        });
        
        // If it completes within timeout
        expect(response.status()).toBe(200);
      } catch (error) {
        // Should timeout and throw error - can be various network error types
        const errorMessage = error.message.toLowerCase();
        const isNetworkError = errorMessage.includes('timeout') || 
                              errorMessage.includes('socket hang up') ||
                              errorMessage.includes('network') ||
                              errorMessage.includes('connection');
        
        expect(isNetworkError).toBe(true);
        console.log('Request failed as expected:', error.message);
      }
    });

    test('should test timeout with a more reliable approach', async ({ request }) => {
      const startTime = Date.now();
      
      try {
        await request.get('https://httpbin.org/delay/10', {
          timeout: 3000 // 3 second timeout for 10 second delay
        });
        
        // If we get here, something went wrong
        throw new Error('Request should have timed out');
      } catch (error) {
        const endTime = Date.now();
        const elapsed = endTime - startTime;
        
        // Should fail within roughly the timeout period (with some buffer)
        expect(elapsed).toBeLessThan(5000); // Should fail within 5 seconds
        expect(elapsed).toBeGreaterThan(2500); // Should take at least 2.5 seconds
        
        console.log(`Request failed after ${elapsed}ms as expected`);
        console.log(`Error type: ${error.message}`);
      }
    });
  });
});