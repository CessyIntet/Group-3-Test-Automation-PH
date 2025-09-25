import { APIRequestContext, expect } from '@playwright/test';

// API Helper functions for reusable API testing utilities
export class ApiHelpers {
  
  /**
   * Generic API request helper with error handling
   */
  static async makeRequest(
    request: APIRequestContext,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    options?: {
      data?: any;
      headers?: Record<string, string>;
      timeout?: number;
    }
  ) {
    const config: any = {
      timeout: options?.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      }
    };

    if (options?.data) {
      config.data = options.data;
    }

    let response;
    switch (method) {
      case 'GET':
        response = await request.get(url, config);
        break;
      case 'POST':
        response = await request.post(url, config);
        break;
      case 'PUT':
        response = await request.put(url, config);
        break;
      case 'DELETE':
        response = await request.delete(url, config);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response;
  }

  /**
   * Validate response structure and status
   */
  static async validateResponse(
    response: any,
    expectedStatus: number,
    requiredFields?: string[]
  ) {
    expect(response.status()).toBe(expectedStatus);
    
    if (requiredFields && expectedStatus >= 200 && expectedStatus < 300) {
      const data = await response.json();
      
      requiredFields.forEach(field => {
        expect(data).toHaveProperty(field);
      });
      
      return data;
    }
    
    return response;
  }

  /**
   * Pokemon API specific helpers
   */
  static async fetchPokemon(request: APIRequestContext, id: number | string) {
    const response = await this.makeRequest(request, 'GET', `https://pokeapi.co/api/v2/pokemon/${id}`);
    return this.validateResponse(response, 200, ['name', 'id', 'height', 'weight']);
  }

  static async fetchPokemonList(request: APIRequestContext, limit = 20, offset = 0) {
    const response = await this.makeRequest(
      request, 
      'GET', 
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    return this.validateResponse(response, 200, ['results', 'count']);
  }

  /**
   * Todo API helpers
   */
  static async createTodo(request: APIRequestContext, todoData: {
    title: string;
    completed?: boolean;
    userId?: number;
  }) {
    const response = await this.makeRequest(
      request,
      'POST',
      'https://jsonplaceholder.typicode.com/todos',
      { data: todoData }
    );
    return this.validateResponse(response, 201, ['id', 'title']);
  }

  static async fetchTodo(request: APIRequestContext, id: number) {
    const response = await this.makeRequest(
      request,
      'GET',
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return this.validateResponse(response, 200, ['id', 'title', 'completed', 'userId']);
  }

  static async updateTodo(request: APIRequestContext, id: number, updates: {
    title?: string;
    completed?: boolean;
    userId?: number;
  }) {
    const response = await this.makeRequest(
      request,
      'PUT',
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { data: { id, ...updates } }
    );
    return this.validateResponse(response, 200, ['id']);
  }

  static async deleteTodo(request: APIRequestContext, id: number) {
    const response = await this.makeRequest(
      request,
      'DELETE',
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return this.validateResponse(response, 200);
  }

  /**
   * Performance measurement helpers
   */
  static async measureResponseTime(requestFunction: () => Promise<any>) {
    const startTime = Date.now();
    const response = await requestFunction();
    const endTime = Date.now();
    
    return {
      response,
      responseTime: endTime - startTime
    };
  }

  /**
   * Data validation helpers
   */
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Test data generators
   */
  static generateRandomTodo() {
    return {
      title: `Test todo ${Date.now()}`,
      completed: Math.random() > 0.5,
      userId: Math.floor(Math.random() * 10) + 1
    };
  }

  static generateRandomUser() {
    const timestamp = Date.now();
    return {
      name: `Test User ${timestamp}`,
      username: `testuser${timestamp}`,
      email: `test${timestamp}@example.com`,
      phone: '1-555-123-4567',
      website: `https://test${timestamp}.com`
    };
  }

  /**
   * Batch request helpers
   */
  static async makeConcurrentRequests(
    request: APIRequestContext,
    urls: string[],
    maxConcurrency = 5
  ) {
    const results = [];
    
    for (let i = 0; i < urls.length; i += maxConcurrency) {
      const batch = urls.slice(i, i + maxConcurrency);
      const batchPromises = batch.map(url => 
        this.makeRequest(request, 'GET', url)
      );
      
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
    }
    
    return results;
  }

  /**
   * API health check helper
   */
  static async checkApiHealth(request: APIRequestContext, baseUrl: string) {
    try {
      const { response, responseTime } = await this.measureResponseTime(
        () => this.makeRequest(request, 'GET', baseUrl)
      );
      
      return {
        isHealthy: response.status() >= 200 && response.status() < 400,
        status: response.status(),
        responseTime,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        isHealthy: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
}