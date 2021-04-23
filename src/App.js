import Dashboard from "./pages";
import { SectionRefProvider } from "./contexts/refContext";

function App() {
  return (
    <div className="App-wrapper">
      <SectionRefProvider>
        <Dashboard />
      </SectionRefProvider>
    </div>
  );
}

export default App;
