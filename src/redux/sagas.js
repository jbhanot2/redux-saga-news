import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=3fbbff65e76a46259102b7dea8d80067')
                    .then(res => res.json())
    yield put({type: 'NEWS_RECEIVED', json:json.articles})
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}