export default function ShipCard({ ship }) {
  return (
    <article className="ship-card-container">
      <h3>{ship.shipName}</h3>
      <hr />
      <div className="ship-card-content-container">
        <img
          src={`src/assets/images/ship_images/${ship.shipName}.png`}
          alt="feisar"
          className="ship-card-image"
        />
        <div className="ship-card-text">{ship.shipInfo}</div>
      </div>
    </article>
  );
}
