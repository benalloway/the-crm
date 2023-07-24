import { put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'

import { set } from '../../../utilities/asyncStorage';

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditCustomer(action) {
    const customerID = action.payload

    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const result = customers.map(customer => {
            if (customer.id !== customerID) return customer

            return fields
        })

        yield set('CUSTOMERS_KEY', result)

        yield delay(500)

        yield put(actions.editCustomerResult(result))
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}

