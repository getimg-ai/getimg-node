// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { GetimgAI } from '../client';

export abstract class APIResource {
  protected _client: GetimgAI;

  constructor(client: GetimgAI) {
    this._client = client;
  }
}
