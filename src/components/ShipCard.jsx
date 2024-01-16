import { useState } from "react";

export default function ShipCard({ ship }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="ship-card-container"
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <h3>
        {ship.shipName}
        <img
          src={`src/assets/images/teams_icons/${ship.shipName}.png`}
          alt="feisar"
          width={"25"}
          height={"25"}
          style={{ userSelect: "none" }}
        />
      </h3>
      <hr />
      <div className="ship-card-content-container">
        <img
          src={`src/assets/images/ship_images/${ship.shipName}.png`}
          alt="feisar"
          className="ship-card-image"
          style={{ display: hover ? "none" : "inline" }}
        />
        <img
          src={`src/assets/images/ship_images/${ship.shipName}_hover.png`}
          alt="feisar"
          className="ship-card-image"
          style={{ display: !hover ? "none" : "inline" }}
        />
        <div className="ship-card-right-part">
          <div className="ship-card-text">{ship.shipInfo}</div>
          <div className="ship-card-team-colors">
            <span>team colors</span>
            <div style={{ marginTop: "0.3rem" }}>
              {ship.teamColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="ship-card-team-color"
                    style={{ backgroundColor: color }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
