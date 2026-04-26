// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GenerationsAPI from './generations';
import { GenerationCreateParams, GenerationCreateResponse, GenerationRetrieveResponse, Generations } from './generations';

export class Videos extends APIResource {
  generations: GenerationsAPI.Generations = new GenerationsAPI.Generations(this._client);
}

Videos.Generations = Generations;

export declare namespace Videos {
  export {
    Generations as Generations,
    type GenerationCreateResponse as GenerationCreateResponse,
    type GenerationRetrieveResponse as GenerationRetrieveResponse,
    type GenerationCreateParams as GenerationCreateParams
  };
}
