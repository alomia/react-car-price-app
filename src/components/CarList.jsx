import { useGlobalState } from "../context/GlobalState";
import { cars } from "../database/cars";
import CarItem from "./CarItem";

function CarList() {
  const { budget } = useGlobalState();

  return (
    <section className="grid grid-cols-3 my-3 gap-3">
      {cars
        .filter((car) => car.price <= budget)
        .map((car) => {
          return <CarItem key={car.id} car={car} />;
        })}
    </section>
  );
}

export default CarList;
