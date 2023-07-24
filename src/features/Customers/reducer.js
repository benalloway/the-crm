import { createSlice } from '@reduxjs/toolkit'
import { PENDING, INPROGRESS, REQUESTING, SUCCESS, ERROR, AVAILABLE_REGIONS, CONTACT_STATUSES } from '../../utilities/helpers'

const name = 'customer'

const initialState = {
    list: {
        status: PENDING,
        customers: [],
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    delete: {
        status: PENDING
    },
    form: {
        fields: {
            name: null,
            job: null,
            region: null,
            status: null,
        },
    },
    error: {
        message: ''
    }
}

const reducers = {
    createCustomer: (state) => {
        state.create.status = REQUESTING
    },
    createCustomerResult: (state, { payload }) => {
        state.create.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.create = initialState.create
    },
    createCustomerError: (state, { payload }) => {
        state.create.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    editCustomer: (state, { payload }) => {
        state.edit.status = REQUESTING
    },
    deleteCustomer: (state, { payload }) => {
        state.delete.status = REQUESTING
    },
    setForm: (state, { payload }) => {
        const customer = state.list.customers.find(a => a.id = payload)

        if (customer) {
            state.form.fields = customer
        } else {
            state.error.message = `could not find customer with id: ${payload}`
        }
    },
    editCustomerResult: (state, { payload }) => {
        state.edit.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.edit = initialState.edit
    },
    editCustomerError: (state) => {
        state.edit.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    editCustomerStatus: (state, { payload }) => {
        state.edit = payload
    },
    deleteCustomerResult: (state, { payload }) => {
        state.delete.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.delete = initialState.delete
    },
    deleteCustomerError: (state) => {
        state.delete.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    deleteCustomerStatus: (state, { payload }) => {
        state.delete = payload
    },
    setFormField: (state, { payload }) => {
        const current = state.form.fields
        const { field, value } = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    createCustomer,
    createCustomerResult,
    createCustomerError,
    setForm,
    editCustomer,
    editCustomerResult,
    editCustomerError,
    editCustomerStatus,
    deleteCustomer,
    deleteCustomerResult,
    deleteCustomerError,
    deleteCustomerStatus,
    setFormField,
} = slice.actions

export default slice.reducer

const seed = () => {
    for(let i = 0; i< 100; i++) {
      initialState.list.customers.push({
        name: faker.person.fullName(),
        id: faker.number.int(),
        job: faker.person.jobTitle(),
        region: faker.helpers.arrayElement(Object.values(AVAILABLE_REGIONS)),
        status: faker.helpers.arrayElement(Object.values(CONTACT_STATUSES))
      })
    }
  }
  seed();