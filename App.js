import {
  CustomersProvider,
} from "./src/context/CustomersContext";
import Navigation from "./src/navigation/navigation";

export default function App() {
  return (
    <CustomersProvider>
      <Navigation />
    </CustomersProvider>
  );
}
