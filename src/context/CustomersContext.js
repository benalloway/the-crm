import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from 'uuid';


const CustomersContext = createContext(null);

const CustomersDispatchContext = createContext(null);

export const CustomersProvider = ({ children }) => {
  const [customers, dispatch] = useReducer(customersReducer, initialCustomers);

  return (
    <CustomersContext.Provider value={customers}>
      <CustomersDispatchContext.Provider value={dispatch}>
        {children}
      </CustomersDispatchContext.Provider>
    </CustomersContext.Provider>
  );
};

export function useCustomers() {
  return useContext(CustomersContext);
}

export function useCustomersDispatch() {
  return useContext(CustomersDispatchContext);
}

function customersReducer(customers, action) {
  switch (action.type) {
    case "created": {
      return [
        ...customers,
        {
          ...action.customer
        },
      ];
    }
    case "edited": {
      return customers.map((customer) => {
        if (customer.id === action.customer.id) {
          return action.customer;
        } else {
          return customer;
        }
      });
    }
    case "deleted": {
      return customers.filter((customer) => customer.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const AVAILABLE_REGIONS = {
  NorthWest: "North West",
  NorthEast: "North East",
  SouthWest: "South West",
  SouthEast: "South East",
};


let initialCustomers = []
const seed = () => {
  for(let i = 0; i< 100; i++) {
    initialCustomers.push({
      name: faker.person.fullName(),
      id: uuidv4(),
      job: faker.person.jobTitle(),
      region: faker.helpers.arrayElement(Object.values(AVAILABLE_REGIONS)),
    })
  }
}
seed();
