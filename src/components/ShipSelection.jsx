import ShipCard from "./ShipCard";
import shipInfo from "../data/ship-info";

export default function ShipSelection() {
  console.log(shipInfo);
  return (
    <section className="ship-selection-section">
      {shipInfo.map((ship, index) => {
        return <ShipCard key={index} ship={ship} />;
      })}
    </section>
  );
}
