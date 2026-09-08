// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints for listing available developer models.
 */
export class Models extends APIResource {
  /**
   * List the models available to your project with their supported parameters and
   * pricing.
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

    pricing: ModelListResponseItem.Pricing;

    /**
     * Supported aspect ratios in default order; the first is used when omitted.
     */
    supported_aspect_ratios: Array<string>;

    /**
     * Supported durations in seconds; empty for image models. The first is the
     * default.
     */
    supported_durations: Array<number>;

    /**
     * Maximum reference count per supported role (reference_image, first_frame,
     * last_frame).
     */
    supported_references: { [key: string]: number };

    /**
     * Supported resolutions in default order; the first is used when omitted.
     */
    supported_resolutions: Array<string>;

    /**
     * Whether sound generation is supported.
     */
    supports_sound: boolean;

    /**
     * The generation type supported by the model.
     */
    type: 'image' | 'video';
  }

  export namespace ModelListResponseItem {
    export interface Pricing {
      currency: 'USD';

      /**
       * Currently effective catalog rates, ordered by unit price. Empty when no active
       * rates are configured; this does not mean generation is free.
       */
      rates: Array<Pricing.Rate>;
    }

    export namespace Pricing {
      export interface Rate {
        /**
         * Unit billed, such as image or video_second.
         */
        billable_unit: string;

        /**
         * Resolution this rate applies to, or null for a resolution-independent rate.
         */
        resolution: string | null;

        /**
         * Sound setting this rate applies to; not_applicable also serves as a video
         * fallback.
         */
        sound: 'sound_on' | 'sound_off' | 'not_applicable';

        /**
         * USD price per billable unit, represented as a decimal string.
         */
        unit_price: string;
      }
    }
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
