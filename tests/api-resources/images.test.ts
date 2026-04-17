// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Getimg from 'getimg';

const client = new Getimg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // Mock server tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.images.generate({
      model: 'seedream-5-lite',
      prompt: 'A cinematic portrait of a cat astronaut',
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
  test.skip('generate: required and optional params', async () => {
    const response = await client.images.generate({
      model: 'seedream-5-lite',
      prompt: 'A cinematic portrait of a cat astronaut',
      aspect_ratio: '1:1',
      images: [{ url: 'x' }],
      output_format: 'jpeg',
      resolution: '2K',
    });
  });
});
