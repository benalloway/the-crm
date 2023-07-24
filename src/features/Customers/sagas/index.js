import { all } from 'redux-saga/effects'
import { watchCreateCustomer } from './create'
import { watchEditCustomer } from './edit'
import { watchDeleteCustomer } from './delete'

export default function* customer() {
    yield all([
        watchCreateCustomer(),
        watchEditCustomer(),
        watchDeleteCustomer()
    ])
}
