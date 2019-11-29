import { createSelector } from 'reselect';

const searchedResults = state => state.searchResult.data 
const searchedModel = state => state.searchResult.model 

export const gitHubSearched = createSelector(
    searchedResults,
    searchedModel,
    (result, model) => {
        if(result && result.length > 0) {
            return result.filter((item) => {
                let flag = true;
                for (var key in item) {
                    if (model.hasOwnProperty(key)) {
                        if(model[key]){
                            if(String(model[key]) !== String(item[key])) {
                                flag = false;
                            }
                        }
                    }
                }
                return flag;
            });
        }
        else {
            return [];
        }
    }
  )