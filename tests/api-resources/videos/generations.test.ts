// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GetimgAI from 'getimg-ai';

const client = new GetimgAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generations', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.videos.generations.create({
      model: 'seedance-v1-pro',
      prompt: 'A drone shot over a futuristic city skyline at sunset',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.videos.generations.create({
      model: 'seedance-v1-pro',
      prompt: 'A drone shot over a futuristic city skyline at sunset',
      aspect_ratio: '16:9',
      duration: 5,
      images: [{ role: 'reference_image', url: 'x' }],
      resolution: '1080p',
      sound: false,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.videos.generations.retrieve('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
