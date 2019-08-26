import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = props => {
  return (
    <button className="button button-primary" onClick={props.handleBack}>
      <FontAwesomeIcon icon={props.isDetail ? "chevron-left" : "chevron-right" }/> 
      { props.isDetail ? "Back" : "Find out more"  }
    </button>
  );
};

export default React.memo(Button);
