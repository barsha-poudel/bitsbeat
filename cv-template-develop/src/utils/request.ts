import { BASE_URL } from 'Constants/uris';
// import { call, put } from 'redux-saga/effects';

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function get(
  url: string,
  options?: RequestInit,
): Promise<{} | { err: ResponseError }> {
  const fetchResponse = await fetch(`${BASE_URL}${url}`, options);
  const response = checkStatus(fetchResponse);
  return parseJSON(response);
}

export function requestJSON(url, options) {
  if (!window.navigator.onLine) throw new Error('No Internet Connection');
  if (options === undefined) {
    options = {}; // eslint-disable-line no-param-reassign
  }
  // To send the cookies for same domain
  options.credentials = 'same-origin'; // eslint-disable-line no-param-reassign

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
      if (err.message === 'Failed to fetch') {
        throw new Error('internet error');
      }
      throw err;
    });
}

export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
      if (err.message === 'Failed to fetch') {
        throw new Error('internet error');
      }
      throw err;
    });
}
