import { put, select, takeLatest, delay } from 'redux-saga/effects'
import uuid from 'react-native-uuid';

import { CUSTOMERS_KEY } from '../../../utilities/asyncStorage';
import * as actions from '../reducers'
import { set } from '../../../utilities/asyncStorage';

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer)
}

export function* takeCreateCustomer() {
    try {
        const fields = yield select(state => state.customer.form.fields)
        let customers = yield select(state => state.customer.list.customers)
        
        const customer = {
            id: uuid.v4(),
            ...fields,
        }

        if(!customers) customers = []

        const result = [customer, ...customers]

        yield set(CUSTOMERS_KEY, result)

        yield delay(500)

        yield put(actions.createCustomerResult(result))
    } catch (error) {
        console.log(error);
        yield put(actions.createCustomerError(error.toString()))
    }
}

