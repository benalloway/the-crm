import { put, select, takeLatest } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid';

import * as actions from '../reducers'

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer)
}

export function* takeCreateCustomer() {
    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const customer = {
            id: uuidv4(),
            ...fields,
        }

        const result = [customer, ...customers]

        yield put(actions.createCustomerResult(result))
    } catch (error) {
        yield put(actions.createCustomerError(error.toString()))
    }
}

