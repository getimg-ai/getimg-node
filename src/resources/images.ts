// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints for image generation.
 */
export class Images extends APIResource {
  /**
   * Generate an image and return the completed result.
   *
   * @example
   * ```ts
   * const response = await client.images.generate({
   *   model: 'seedream-5-lite',
   *   prompt: 'A cinematic portrait of a cat astronaut',
   *   aspect_ratio: '1:1',
   *   output_format: 'jpeg',
   *   resolution: '2K',
   * });
   * ```
   */
  generate(body: ImageGenerateParams, options?: RequestOptions): APIPromise<ImageGenerateResponse> {
    return this._client.post('/v2/images/generations', { body, ...options });
  }
}

export interface Usage {
  /**
   * The unit of the cost.
   */
  billable_unit: string;

  /**
   * The quantity of the generation.
   */
  quantity: number;

  /**
   * Total cost of the generation.
   */
  total_cost: number;

  /**
   * The price of the unit.
   */
  unit_price: number;
}

export interface ImageGenerateResponse {
  /**
   * The ID of the generation request.
   */
  id: string;

  /**
   * The media items for the generation.
   */
  data: Array<ImageGenerateResponse.Data>;

  /**
   * The model used for the generation.
   */
  model: string;

  status: 'completed';

  usage: Usage;
}

export namespace ImageGenerateResponse {
  export interface Data {
    /**
     * The date and time the image will be deleted.
     */
    deletes_at: string;

    /**
     * The MIME type of the image.
     */
    mime_type: string;

    /**
     * Signed temporary download URL.
     */
    url: string;

    /**
     * The height of the image in pixels.
     */
    height?: number | null;

    /**
     * The width of the image in pixels.
     */
    width?: number | null;
  }
}

export interface ImageGenerateParams {
  /**
   * AI model ID. See [supported models](https://getimg.ai/app/developer/models).
   */
  model: string;

  /**
   * Description of the image to generate or an editing instruction.
   */
  prompt: string;

  /**
   * Optional output aspect ratio. See
   * [supported values by model](https://getimg.ai/app/developer/models).
   */
  aspect_ratio?: string;

  images?: Array<ImageGenerateParams.Image>;

  /**
   * Output image format.
   */
  output_format?: 'png' | 'jpeg' | 'webp';

  /**
   * Optional output resolution. See
   * [supported values by model](https://getimg.ai/app/developer/models).
   */
  resolution?: string;
}

export namespace ImageGenerateParams {
  export interface Image {
    /**
     * Publicly accessible reference image URL.
     */
    url: string;
  }
}

export declare namespace Images {
  export {
    type Usage as Usage,
    type ImageGenerateResponse as ImageGenerateResponse,
    type ImageGenerateParams as ImageGenerateParams
  };
}
