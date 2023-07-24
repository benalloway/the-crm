import initializeStore from './src/store'
import { Provider } from "react-redux";
import Navigation from "./src/navigation/navigation";

const store = initializeStore()

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
