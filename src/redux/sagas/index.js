import { call, put, takeLatest, all } from 'redux-saga/effects'
import {
    REQUEST_SEARCH,
    RESPONSE_SEARCH,
    ERROR_SEARCH,
    SEARCHED_MODEL,
    UPDATE_SEARCHED_MODEL
} from '../actions';

import { SearchedModel } from '../../schema';
import { fetchRepos } from '../../util/githubUtil';

function* requestSearch(action) {
    try {
        const json = yield call(fetchRepos, action.org);
        yield put({ type: RESPONSE_SEARCH, data: json, });
    }
    catch (err) {
        yield put({ type: ERROR_SEARCH, data: true, });
    }
}

function* searchedModel(action) {
    const { model } = action;
    const sModel = Object.assign({}, SearchedModel);
    model.forEach((item) => {
        const name = item.field.name.split("-")[1].toLowerCase();
        if(item.field.name !== 'org-name')
            sModel[name] = item.field.value;
    });
    yield put({ type: UPDATE_SEARCHED_MODEL, model: sModel, });
}

function* actionWatcher() {
    yield takeLatest(REQUEST_SEARCH, requestSearch);
    yield takeLatest(SEARCHED_MODEL, searchedModel);
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}