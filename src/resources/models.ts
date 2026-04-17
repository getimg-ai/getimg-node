// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints for listing available developer models.
 */
export class Models extends APIResource {
  /**
   * List available developer models for the authenticated project.
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListResponse> {
    return this._client.get('/v2/models', { query, ...options });
  }
}

export type ModelListResponse = Array<ModelListResponse.ModelListResponseItem>;

export namespace ModelListResponse {
  export interface ModelListResponseItem {
    /**
     * The model identifier.
     */
    id: string;

    /**
     * Timestamp when the model was created.
     */
    created_at: string;

    /**
     * The model display name.
     */
    name: string;

    /**
     * The generation type supported by the model.
     */
    type: 'image' | 'video';
  }
}

export interface ModelListParams {
  /**
   * Optional model type filter.
   */
  type?: 'image' | 'video';
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse, type ModelListParams as ModelListParams };
}
