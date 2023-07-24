import { all } from 'redux-saga/effects'
import customer from '../features/Customers/sagas'

export default function* rootSaga() {
    yield all([
        customer(),
    ])
}