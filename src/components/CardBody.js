import React from "react";
import Button from "./Button";

const CardBody = props => {
  return (
    <div className="card-body">
      <h2>{props.title && props.title.split("with")[0]}</h2>
      <span className="sub-title">{props.title && `with ${props.title.split("with")[1]}`}</span>
      <p className="body-content">{props.text}</p>
      {
          props.tags && props.tags.length > 0 && <div className="tags"> {props.tags.map( (tag, i) => <span key={i}>{tag}</span>)}</div>
      }
      <Button isDetail={props.isDetails} handleBack={props.handleBack}/>
    </div>
  );
};

export default React.memo(CardBody);
