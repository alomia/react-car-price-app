import { useGlobalState } from "../context/GlobalState";

function Budget() {
  const { budget, setBudget } = useGlobalState();

  const onChangeHandler = (e) => {
    setBudget(e.target.value);
  };

  return (
    <form className="bg-gray-300 rounded-md p-3">
      <label htmlFor="budget">
        <span>Budget:</span>
        <input
          className="pl-2"
          type="number"
          name="budget"
          id="budget"
          min={300}
          max={10000}
          step={100}
          value={budget}
          onChange={onChangeHandler}
        />
      </label>
    </form>
  );
}

export default Budget;
