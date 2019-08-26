import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = props => {
  return (
    <section className="app-title">
      <div className="app-title-content">
        <h1>Our weekly menu</h1>
        <p>COOK WITH MARTHA STEWART'S MEAL KIT</p>
        <a
          className="app-subscription"
          rel="noopener noreferrer"
          href="https://marleyspoon.com/?=limitedoffer"
          target="_blank"
        >
          Marley Spoon
          <FontAwesomeIcon icon="globe" />
        </a>
      </div>
    </section>
  );
};

export default React.memo(Title);
