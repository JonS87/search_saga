import { takeLatest, debounce, put, spawn, call } from "redux-saga/effects";
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure } from "../actions/actionCreators";
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from "../actions/actionTypes";
import { searchSkills } from "../api";

interface Skill {
  id: number;
  name: string;
}

function* handleChangeSearchSaga(action: { payload: { search: string } }) {
    yield put(searchSkillsRequest(action.payload.search));
}

function* handleSearchSkillsSaga(action: { payload: { search: string } }) {
    try {
        const data: Skill[] = yield call(searchSkills, action.payload.search);
        yield put(searchSkillsSuccess(data));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(searchSkillsFailure(e.message));
        } else {
            yield put(searchSkillsFailure('Unknown error occurred'));
        }
    }
}

function* watchChangeSearchSaga() {
    yield debounce(300, CHANGE_SEARCH_FIELD, handleChangeSearchSaga);
}

function* watchSearchSkillsSaga() {
    yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

export default function* rootSaga() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga);
}
