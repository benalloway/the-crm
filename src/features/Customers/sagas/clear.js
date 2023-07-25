import { put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'

import { clear } from '../../../utilities/asyncStorage';
import { CUSTOMERS_KEY } from '../../../utilities/asyncStorage';

export function* watchClearCustomer() {
    yield takeLatest(actions.clearCustomers.toString(), takeClearCustomers)
}

export function* takeClearCustomers(action) {
    try {
        const result = []

        yield clear()
        console.log("clear.js - Clearing")
        yield delay(500)

        yield put(actions.editCustomerResult(result))
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}

