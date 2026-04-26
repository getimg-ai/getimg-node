// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImagesAPI from '../images';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints for video generation.
 */
export class Generations extends APIResource {
  /**
   * Submit a video generation request and return a pending result.
   *
   * @example
   * ```ts
   * const generation = await client.videos.generations.create({
   *   model: 'seedance-v1-pro',
   *   prompt:
   *     'A drone shot over a futuristic city skyline at sunset',
   *   aspect_ratio: '16:9',
   *   duration: 5,
   *   resolution: '1080p',
   * });
   * ```
   */
  create(body: GenerationCreateParams, options?: RequestOptions): APIPromise<GenerationCreateResponse> {
    return this._client.post('/v2/videos/generations', { body, ...options });
  }

  /**
   * Retrieve the current status for a video generation request. The response status
   * is `pending`, `failed`, or `completed`.
   *
   * @example
   * ```ts
   * const generation = await client.videos.generations.retrieve(
   *   'x',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GenerationRetrieveResponse> {
    return this._client.get(path`/v2/videos/generations/${id}`, options);
  }
}

export interface GenerationCreateResponse {
  /**
   * The ID of the generation request.
   */
  id: string;

  /**
   * The status of the generation request.
   */
  status: 'pending';
}

export type GenerationRetrieveResponse = GenerationRetrieveResponse.VideoGenerationPendingResponse | GenerationRetrieveResponse.VideoGenerationFailedResponse | GenerationRetrieveResponse.VideoGenerationCompletedResponse

export namespace GenerationRetrieveResponse {
  export interface VideoGenerationPendingResponse {
    /**
     * The ID of the generation request.
     */
    id: string;

    /**
     * The status of the generation request.
     */
    status: 'pending';
  }

  export interface VideoGenerationFailedResponse {
    /**
     * The ID of the generation request.
     */
    id: string;

    error: VideoGenerationFailedResponse.Error;

    /**
     * The status of the generation request.
     */
    status: 'failed';
  }

  export namespace VideoGenerationFailedResponse {
    export interface Error {
      /**
       * The error code.
       */
      code: string;

      /**
       * The error message.
       */
      message: string;
    }
  }

  export interface VideoGenerationCompletedResponse {
    /**
     * The ID of the generation request.
     */
    id: string;

    /**
     * The media items for the generation.
     */
    data: Array<VideoGenerationCompletedResponse.Data>;

    /**
     * The model used for the generation.
     */
    model: string;

    /**
     * The status of the generation request.
     */
    status: 'completed';

    usage?: ImagesAPI.Usage;
  }

  export namespace VideoGenerationCompletedResponse {
    export interface Data {
      /**
       * The date and time the video will be deleted.
       */
      deletes_at: string;

      /**
       * The MIME type of the video.
       */
      mime_type: string;

      /**
       * Signed temporary download URL.
       */
      url: string;

      /**
       * The duration of the video in seconds.
       */
      duration?: number | null;

      /**
       * The frame rate of the video.
       */
      fps?: number | null;

      /**
       * Whether the video has and audio track.
       */
      has_sound?: boolean;

      /**
       * The height of the video in pixels.
       */
      height?: number | null;

      /**
       * The width of the video in pixels.
       */
      width?: number | null;
    }
  }
}

export interface GenerationCreateParams {
  /**
   * AI model ID. See [supported models](https://getimg.ai/app/developer/models).
   */
  model: string;

  /**
   * Description of the video to generate.
   */
  prompt: string;

  /**
   * Optional output aspect ratio. See
   * [supported values by model](https://getimg.ai/app/developer/models).
   */
  aspect_ratio?: string;

  /**
   * Optional duration in seconds. See
   * [supported values by model](https://getimg.ai/app/developer/models).
   */
  duration?: number;

  /**
   * Optional reference images. See
   * [supported values by model](https://getimg.ai/app/developer/models).
   */
  images?: Array<GenerationCreateParams.Image>;

  /**
   * Optional output resolution. See
   * [supported values by model](https://getimg.ai/app/developer/models).
   */
  resolution?: string;

  /**
   * Set to `true` to generate audio when supported by the model.
   */
  sound?: boolean;
}

export namespace GenerationCreateParams {
  export interface Image {
    /**
     * The role of the reference image.
     */
    role: 'reference_image' | 'first_frame' | 'last_frame';

    /**
     * Publicly accessible reference image URL.
     */
    url: string;
  }
}

export declare namespace Generations {
  export {
    type GenerationCreateResponse as GenerationCreateResponse,
    type GenerationRetrieveResponse as GenerationRetrieveResponse,
    type GenerationCreateParams as GenerationCreateParams
  };
}
