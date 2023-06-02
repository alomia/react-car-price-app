function CarItem({ car }) {
  const { brand, color, model, price, year } = car;

  return (
    <article className="shadow-md p-5 flex flex-col">
      <h3 className="font-extrabold text-center border-b-2">
        {brand} {model}
      </h3>
      <p>
        Year: <span>{year}</span>
      </p>
      <p>
        Price: <span className="font-semibold text-orange-600">${price}</span>
      </p>
      <p>
        Color: <span>{color}</span>
      </p>
    </article>
  );
}

export default CarItem;
