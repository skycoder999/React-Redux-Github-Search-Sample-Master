export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RESPONSE_SEARCH = 'RESPONSE_SEARCH';
export const ERROR_SEARCH = 'ERROR_SEARCH';
export const SEARCHED_MODEL = 'SEARCHED_MODEL';
export const UPDATE_SEARCHED_MODEL = 'UPDATE_SEARCHED_MODEL';

export const requestSearch = (org) => ({
    type: REQUEST_SEARCH,
    org
});

export const searchedModel = (model) => ({
    type: SEARCHED_MODEL,
    model
});