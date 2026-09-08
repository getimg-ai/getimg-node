// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Developer API balance and usage costs.
 */
export class Billing extends APIResource {
  /**
   * Retrieve daily API costs and the range total for your developer project.
   */
  listCosts(query: BillingListCostsParams, options?: RequestOptions): APIPromise<BillingListCostsResponse> {
    return this._client.get('/v2/billing/costs', { query, ...options });
  }

  /**
   * Retrieve the current API balance shared by the API key's workspace.
   */
  retrieveBalance(options?: RequestOptions): APIPromise<BillingRetrieveBalanceResponse> {
    return this._client.get('/v2/billing/balance', options);
  }
}

export interface BillingListCostsResponse {
  currency: 'USD';

  /**
   * One bucket per UTC calendar date in the range.
   */
  data: Array<BillingListCostsResponse.Data>;

  /**
   * End of the requested range.
   */
  end: string;

  /**
   * Start of the requested range.
   */
  start: string;

  /**
   * Total cost for the range in USD.
   */
  total_cost: number;
}

export namespace BillingListCostsResponse {
  export interface Data {
    /**
     * Cost for the bucket in USD.
     */
    cost: number;

    /**
     * UTC calendar date for the bucket.
     */
    date: string;
  }
}

export interface BillingRetrieveBalanceResponse {
  /**
   * Current balance in USD.
   */
  balance: string;

  currency: 'USD';
}

export interface BillingListCostsParams {
  /**
   * Inclusive ISO 8601 end timestamp. Must include a time zone, fall after `start`,
   * and sit within 180 days of it.
   */
  end: string;

  /**
   * Inclusive ISO 8601 start timestamp. Must include a time zone.
   */
  start: string;
}

export declare namespace Billing {
  export {
    type BillingListCostsResponse as BillingListCostsResponse,
    type BillingRetrieveBalanceResponse as BillingRetrieveBalanceResponse,
    type BillingListCostsParams as BillingListCostsParams,
  };
}
