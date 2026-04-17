// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Getimg } from '../client';

export abstract class APIResource {
  protected _client: Getimg;

  constructor(client: Getimg) {
    this._client = client;
  }
}
