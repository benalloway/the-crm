// import {
//   CustomersProvider,
// } from "./src/context/CustomersContext";
import { store } from "./src/store";
import { Provider } from "react-redux";
import Navigation from "./src/navigation/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
