import { useGlobalState } from "../context/GlobalState";

function BudgetDisplay() {
  const { budget } = useGlobalState();

  return (
    <div className="border-2 border-yellow-500 my-5 p-3">
      <p>
        Your current budget is: <span>{budget}</span>
      </p>
    </div>
  );
}

export default BudgetDisplay;
