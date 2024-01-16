// import React from "react";

import feisarIcon from "../assets/images/teams_icons/feisar.png";
import goteki45Icon from "../assets/images/teams_icons/goteki45.png";
import auricomIcon from "../assets/images/teams_icons/auricom.png";
import piranhaIcon from "../assets/images/teams_icons/piranha.png";
import qirexIcon from "../assets/images/teams_icons/qirex.png";
import agsystemsIcon from "../assets/images/teams_icons/ag_systems.png";
import assegaiIcon from "../assets/images/teams_icons/assegai.png";
import icarasIcon from "../assets/images/teams_icons/icaras.png";

export default function Hero() {
  const iconWidth = 28;

  return (
    <section className="hero-section">
      <h1 className="hero-section-title">
        Wipeout three<span id="hero-section-title-cursor">_</span>
      </h1>
      <div className="hero-section-subtitle-container">
        <h2 className="hero-section-subtitle">showroom</h2>
        <div className="hero-section-subtitle-icons-container">
          <img src={feisarIcon} alt="feisar-icon" width={iconWidth} />
          <img src={goteki45Icon} alt="goteki45-icon" width={iconWidth} />
          <img src={auricomIcon} alt="auricom-icon" width={iconWidth} />
          <img src={piranhaIcon} alt="piranha-icon" width={iconWidth} />
          <img src={qirexIcon} alt="qirex-icon" width={iconWidth} />
          <img src={agsystemsIcon} alt="agsystems-icon" width={iconWidth} />
          <img src={assegaiIcon} alt="assegai-icon" width={iconWidth} />
          <img src={icarasIcon} alt="icaras-icon" width={iconWidth} />
        </div>
      </div>

      <hr />

      <div style={{ position: "relative" }}>
        <div className="hero-section-hbars-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hero-section-hbars-container-inverse">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
