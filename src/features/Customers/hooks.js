import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PENDING, INPROGRESS } from "../../utilities/helpers";
import * as actions from "./reducers";

export const useViewFields = (customerID = null) => {
  const fields = useSelector((state) => state.customer.list.customers.find(x => x.id === customerID));

  return {
    fields,
  };
};

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  const fields = useSelector((state) => state.customer.form.fields);

  useEffect(() => {
    if (customerID && status === PENDING) {
      dispatch(actions.setForm(customerID));
    }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useDeleteCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      console.log("Dispatching DELETE_CUSTOMER action");
      dispatch(actions.deleteCustomer(customerID));
    },
  };
};

export const useListCustomers = (region = null) => {
  if(region) return useSelector((state) => state.customer.list.customers.filter(c => c.region === region));

  return useSelector((state) => state.customer.list.customers);
};
