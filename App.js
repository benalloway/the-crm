import {
  RegionsContext,
  RegionsDispatchContext,
  RegionsProvider,
} from "./src/context/RegionsContext";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <RegionsProvider>
      <Navigation />
    </RegionsProvider>
  );
}
