import Header from "./components/Header";
import CarList from "./components/CarList";
import Budget from "./components/Budget";
import BudgetDisplay from "./components/BudgetDisplay";

function App() {
  return (
    <div className="App max-w-3xl mx-auto h-full">
      <Header />
      <BudgetDisplay />
      <CarList />
      <Budget />
    </div>
  );
}

export default App;
