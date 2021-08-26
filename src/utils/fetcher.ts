import { FetcherOptions } from '@interfaces'

function buildQuery (object: Object): string {
  return object ? Object.entries(object).map((parameter) => parameter.join('=')).join('&') : ''
}

export default (url: string, { query, options }: FetcherOptions) => {
  return fetch(`${url}?${buildQuery(query)}`, options)
    .then((response) => response.json())
}
