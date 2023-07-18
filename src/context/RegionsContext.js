import { createContext, useContext, useReducer } from "react";

const RegionsContext = createContext(null);

const RegionsDispatchContext = createContext(null);

export const RegionsProvider = ({ children }) => {
  const [regions, dispatch] = useReducer(regionsReducer, initialRegions);

  return (
    <RegionsContext.Provider value={regions}>
      <RegionsDispatchContext.Provider value={dispatch}>
        {children}
      </RegionsDispatchContext.Provider>
    </RegionsContext.Provider>
  );
};

export function useRegions() {
  return useContext(RegionsContext);
}

export function useRegionsDispatch() {
  return useContext(RegionsDispatchContext);
}

function regionsReducer(regions, action) {
  switch (action.type) {
    case "added": {
      return [
        ...regions,
        {
          id: action.region.id,
          name: action.region.name,
        },
      ];
    }
    case "changed": {
      return regions.map((region) => {
        if (region.id === action.region.id) {
          return action.region;
        } else {
          return region;
        }
      });
    }
    case "deleted": {
      return regions.filter((region) => region.id !== action.region.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialRegions = [
  { name: "North West", id: 1 },
  { name: "North East", id: 2 },
  { name: "North Central", id: 3 },
  { name: "South West", id: 4 },
  { name: "South East", id: 5 },
  { name: "South Central", id: 6 },
];
