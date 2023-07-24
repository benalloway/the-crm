import { put, select, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'

export function* watchDeleteCustomer() {
    yield takeLatest(actions.deleteCustomer.toString(), takeDeleteCustomer)
}

export function* takeDeleteCustomer(action) {
    const customerID = action.payload

    try {
        const customers = yield select(state => state.customer.list.customers)

        // filter out the customer that will be deleted
        const result = customers.filter(customer => customer.id !== customerID);

        yield put(actions.deleteCustomerResult(result))
    } catch (error) {
        yield put(actions.deleteCustomerError(error.toString()))
    }
}

