import { RESPONSE_SEARCH, ERROR_SEARCH, UPDATE_SEARCHED_MODEL } from '../actions';
import { INITIAL_SEARCH_STATE } from '../../schema';
const reducer = (state = INITIAL_SEARCH_STATE, action) => {
   switch (action.type) {
      case RESPONSE_SEARCH:
         return {
            ...state,
            searchResult: {
               ...state.searchResult,
               data: action.data,
               error: {
                  ...state.searchResult.error,
                  isError: false
               }
            }
         };

      case ERROR_SEARCH:
         return {
            ...state,
            searchResult: {
               ...state.searchResult,
               error: {
                  ...state.searchResult.error,
                  isError: true
               }
            }
         };

      case UPDATE_SEARCHED_MODEL:
         return {
            ...state,
            searchResult: {
               ...state.searchResult,
               model: action.model
            }
         };

      default:
         return state;
   }
};
export default reducer;