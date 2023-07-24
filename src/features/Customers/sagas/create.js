import { put, select, takeLatest } from 'redux-saga/effects'
import uuid from 'react-native-uuid';


import * as actions from '../reducers'

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer)
}

export function* takeCreateCustomer() {
    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const customer = {
            id: uuid.v4(),
            ...fields,
        }

        const result = [customer, ...customers]

        yield put(actions.createCustomerResult(result))
    } catch (error) {
        console.log(error);
        yield put(actions.createCustomerError(error.toString()))
    }
}

